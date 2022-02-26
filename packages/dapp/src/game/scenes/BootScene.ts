import Phaser from 'phaser';
import { ethers } from 'ethers';
import { bindActionCreators } from 'redux';
import { store, State, actionCreators } from '@state';
import abi, { contractAddress as address } from '@web3/gameContract';
import { connectWallet } from '@web3/connectWallet';

class BootScene extends Phaser.Scene {
  private state?: State;
  private actions?: typeof actionCreators;
  private readyToStart: boolean = false;
  private helloButton?: Phaser.GameObjects.Text;
  private startButton?: Phaser.GameObjects.Text;
  private sky?: Phaser.GameObjects.Image;
  private TEXT_CONNECT_BUTTON = 'Click to connect wallet';
  private TEXT_START_BUTON = 'Click to start playing';

  constructor() {
    super({
      key: 'BootScene',
    });
  }

  preload(): void {
    this.load.image('sky', 'static/sky.png');
    this.actions = bindActionCreators(actionCreators, store.dispatch);
  }
  create(): void {
    this.sky = this.add.image(0, 0, 'sky');
    this.helloButton = this.add.text(0, 0, this.TEXT_CONNECT_BUTTON, { color: '#333' });
    this.helloButton.setInteractive({ useHandCursor: true });
    this.helloButton.on('pointerdown', () => {
      connectWallet();
    });

    this.startButton = this.add.text(0, 0, this.TEXT_START_BUTON, { color: '#333' });
    this.startButton.visible = false;
    this.startButton.setInteractive({ useHandCursor: true });
    this.startButton.on('pointerdown', () => {
      this.startGame();
      this.readyToStart = true;
    });
    Phaser.Display.Align.In.Center(this.sky, this.add.zone(400, 300, 800, 600));
    Phaser.Display.Align.In.Center(this.helloButton, this.sky);
    Phaser.Display.Align.In.Center(this.startButton, this.sky);

    store.subscribe(() => {
      this.state = store.getState();
      const { userAddress, chainId } = this.state.connection;

      if (userAddress && chainId) {
        const trimAddress = `${userAddress.substring(0, 4)}..${userAddress.substring(
          userAddress.length - 4,
          userAddress.length,
        )}`;
        this.helloButton?.setText(`${trimAddress} at ${chainId}`);
      } else {
        this.helloButton?.setText(this.TEXT_CONNECT_BUTTON);
      }
    });

    this.accountChanged();
  }

  update(): void {
    if (this.state?.connection?.userAddress && !this.readyToStart) {
      this.startButton!.visible = true;
      this.helloButton!.visible = false;
    } else if (this.state?.connection?.userAddress && this.readyToStart) {
      this.startButton?.setText('Confirm transaction and wait for start');
      Phaser.Display.Align.In.Center(this.startButton!, this.sky!);
    }
    if (
      this.state?.connection?.chainId &&
      this.state?.connection?.userAddress &&
      this.state?.connection?.gameStarted
    ) {
      this.startButton!.visible = false;
      this.scene.start('GameScene');
      this.scene.bringToTop('GameScene');
    }
  }

  private startGame = async () => {
    try {
      const gameWithSigner: ethers.Contract = new ethers.Contract(
        address,
        abi,
        this.state.connection.provider.getSigner(),
      );
      await gameWithSigner.start();
    } catch (error) {
      console.log('Error connecting to contract', error);
    }
  };

  private accountChanged = () => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: Array<string>) => {
        this.actions?.setUserAddress(accounts[0]);
      });
      window.ethereum.on('chainChanged', (_chainId: string) => {
        this.actions?.setChainId(_chainId);
      });
      window.ethereum.on('disconnect', () => {
        this.actions?.setUserAddress(null);
      });
    }
  };
}

export default BootScene;
