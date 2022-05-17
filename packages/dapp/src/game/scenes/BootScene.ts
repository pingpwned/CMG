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
  private connectWalletButton?: Phaser.GameObjects.Text;
  private playButton?: Phaser.GameObjects.Text;
  private textInput?: Phaser.GameObjects.DOMElement;
  private addNameText?: Phaser.GameObjects.Text;
  private rect?: Phaser.GameObjects.Rectangle;
  private sky?: Phaser.GameObjects.Image;
  private TEXT_CONNECT_BUTTON = 'Connect Wallet';
  private TEXT_START_BUTTON = 'Play';

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
    this.addNameText = this.add.text(10, 10, 'Your name:', { color: '#ffffff' });
    this.addNameText!.visible = false;

    this.rect = this.add.rectangle(0, 0, 350, 100, 0, 0);
    this.rect.isStroked = true;

    this.textInput = this.add.dom(0, 0, '#name', 'display: block');

    this.connectWalletButton = this.add.text(0, 0, this.TEXT_CONNECT_BUTTON, { color: '#333' });
    this.connectWalletButton.setInteractive({ useHandCursor: true });
    this.connectWalletButton.on('pointerdown', () => {
      connectWallet();
    });

    this.playButton = this.add.text(0, 0, this.TEXT_START_BUTTON, { color: '#333' });
    this.playButton.visible = false;
    this.playButton.setInteractive({ useHandCursor: true });
    this.playButton.on('pointerdown', () => {
      this.startGame(this.state.connection.name);
      this.readyToStart = true;
    });
    Phaser.Display.Align.In.Center(this.sky, this.add.zone(400, 300, 800, 600));
    Phaser.Display.Align.In.Center(this.connectWalletButton, this.sky);
    Phaser.Display.Align.In.Center(this.rect, this.sky);
    Phaser.Display.Align.In.Center(this.addNameText, this.sky, -100, -20);
    Phaser.Display.Align.In.Center(this.textInput, this.sky, 50, -20);
    Phaser.Display.Align.In.Center(this.playButton, this.sky, 0, 20);

    store.subscribe(() => {
      this.state = store.getState();
      const { userAddress, chainId } = this.state.connection;

      if (userAddress && chainId) {
        const trimAddress = `${userAddress.substring(0, 4)}..${userAddress.substring(
          userAddress.length - 4,
          userAddress.length,
        )}`;
        this.connectWalletButton?.setText(`${trimAddress} at ${chainId}`);
      } else {
        this.connectWalletButton?.setText(this.TEXT_CONNECT_BUTTON);
      }
    });

    this.accountChanged();
  }

  update(): void {
    if (this.state?.connection?.userAddress && !this.readyToStart) {
      this.playButton!.visible = true;
      this.rect!.visible = true;
      this.addNameText!.visible = true;
      this.connectWalletButton!.visible = false;
    } else if (this.state?.connection?.userAddress && this.readyToStart) {
      this.playButton?.setText('Confirm transaction and wait for start');
      Phaser.Display.Align.In.Center(this.playButton!, this.sky!);
    }
    if (
      this.state?.connection?.chainId &&
      this.state?.connection?.userAddress &&
      this.state?.connection?.gameStarted
    ) {
      this.playButton!.visible = false;
      this.scene.start('GameScene');
      this.scene.bringToTop('GameScene');
    }
  }

  private startGame = async (name: string) => {
    try {
      const gameWithSigner: ethers.Contract = new ethers.Contract(
        address,
        abi,
        this.state.connection.provider.getSigner(),
      );
      await gameWithSigner.start(name);
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
