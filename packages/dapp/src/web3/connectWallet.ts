import abi, { contractAddress as address } from '@web3/gameContract';
import { ethers } from 'ethers';
import { bindActionCreators } from 'redux';
import { store, actionCreators } from '@state';

export const connectWallet = async () => {
  try {
    const { toggleModal, setProvider, setChainId, setUserAddress, gameStarted, setPlayers } =
      bindActionCreators(actionCreators, store.dispatch);
    if (!window.ethereum) toggleModal();
    const provider: ethers.providers.Web3Provider = new ethers.providers.Web3Provider(
      window.ethereum,
    );
    if (!provider) {
      console.error('Cannot create provider');
      return;
    }
    setProvider(provider);
    const signer: ethers.Signer = provider.getSigner();
    const chainId: string = await provider.send('eth_chainId', []);
    setChainId(chainId);
    console.log(chainId);

    // const rinkebyChainId = '0x4'
    //
    // const devChainId = 1337
    // const localhostChainId = `0x${Number(devChainId).toString(16)}`

    // if (chainId !== rinkebyChainId && chainId !== localhostChainId) {
    //     alert('You are not connected to the Rinkeby Testnet!')
    //     return
    // }

    const accounts = await provider.send('eth_requestAccounts', []);
    setUserAddress(accounts[0]);

    const contract: ethers.Contract = new ethers.Contract(address, abi, provider);
    const gameWithSigner: ethers.Contract = contract.connect(signer);
    const players = await gameWithSigner.getAll();

    console.log(players);

    setPlayers(players);

    const filter = {
      topics: [
        // the name of the event, parnetheses containing the data type of each event, no spaces
        ethers.utils.id('GameStarted(bool)'),
      ],
    };
    const newScoreFilter = {
      topics: [
        // the name of the event, parnetheses containing the data type of each event, no spaces
        ethers.utils.id('NewScore((uint256,uint256)[])'),
      ],
    };
    contract.on(filter, () => {
      gameStarted();
    });
    contract.on(newScoreFilter, players => {
      setPlayers(players);
    });

    // await gameWithSigner.start();
  } catch (error) {
    console.log('Error connecting to metamask', error);
  }
};
