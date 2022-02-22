import Phaser from 'phaser';

import { store, State } from '../../state';
import { ActionType } from '../../state/action-types';
import { ethers } from 'ethers';

class BootScene extends Phaser.Scene {
  private state?: State;
  private TEXT_CONNECT_BUTTON: string = "Click to connect wallet";
  constructor() {
    super({
      key: 'BootScene',
    });
  }

  public preload(): void {}

  public create(): void {
    const helloButton = this.add.text(15, 15, this.TEXT_CONNECT_BUTTON, { color: '#0f0' });
    helloButton.setInteractive({ useHandCursor: true });
    helloButton.on('pointerdown', () => { this.connectWallet() });

    store.subscribe(() => {
      this.state = store.getState();
      const {userAddress, chainId} = this.state.connection;

      if (userAddress && chainId) {
        const trimAddress = `${userAddress.substring(0,4)}..${userAddress.substring(userAddress.length-4,userAddress.length)}`;
        helloButton.setText(`${trimAddress} at ${chainId}`);
      } else {
        helloButton.setText(this.TEXT_CONNECT_BUTTON);
      }
    });

    this.accountChanged();
  }

  public update(): void {
    if(this.state?.connection?.chainId && this.state?.connection?.userAddress) {
      this.scene.start('GameScene');
      this.scene.bringToTop('GameScene');
    }
  }

  connectWallet = async () => {
    try {
      if (!window.ethereum) store.dispatch({type: ActionType.OPEN_PROVIDER_MODAL});
      const provider: ethers.providers.Web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      if (!provider) {
          console.error('Cannot create provider')
          return
      }
      const _chainId: string = await provider.send('eth_chainId', [])
      console.log(_chainId);
      store.dispatch({type: ActionType.SET_NETWORK, payload: _chainId});
      console.log('Connected to chain:', this.state?.connection?.chainId);

      // const rinkebyChainId = '0x4'
      //
      // const devChainId = 1337
      // const localhostChainId = `0x${Number(devChainId).toString(16)}`

      // if (chainId !== rinkebyChainId && chainId !== localhostChainId) {
      //     alert('You are not connected to the Rinkeby Testnet!')
      //     return
      // }

      const accounts = await provider.send('eth_requestAccounts', [])
      store.dispatch({type: ActionType.SET_ADDRESS, payload: accounts[0]});
    } catch (error) {
        console.log('Error connecting to metamask', error)
    }
  }

  accountChanged = async () => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: Array<string>) => {
        store.dispatch({type: ActionType.SET_ADDRESS, payload: accounts[0]});
      });
      window.ethereum.on('chainChanged', (_chainId: string) => {
        store.dispatch({type: ActionType.SET_NETWORK, payload: _chainId});
      });
      window.ethereum.on('disconnect', () => {
        store.dispatch({type: ActionType.SET_ADDRESS, payload: null});
      });
    }
  }

}

export default BootScene;
