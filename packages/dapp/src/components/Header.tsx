import React, { useEffect, useCallback } from 'react';

import { actionCreators, State } from '../state';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ethers } from 'ethers';
import { CHAIN_MAP } from '../web3';
import styled from 'styled-components';

const StyledHeader = styled.header`
  height: 50px;
  background: #121212;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
`;
const Logo = styled.span`
  color: #ffffff;
`;
const Wallet = styled.span`
  color: #e1e1e1;
`;

function Header() {
  // const [ userAddress, setUserAddress ] = useState<string | null>(null);
  // const [ chainId, setChainId ] = useState<string | null>(null);

  const dispatch = useDispatch();
  const state: any = useSelector((state: State) => state.connection);
  const { setUserAddress, setChainId } = bindActionCreators(actionCreators, dispatch);

  /* TODO:  - add Redux
   *        - move connectWallet to ../web3
   *        - use Redux instead of state
   */
  const connectWallet = useCallback(async () => {
    try {
      if (!window.ethereum) console.warn('Metamask not detected');
      const provider: ethers.providers.Web3Provider = new ethers.providers.Web3Provider(
        window.ethereum,
      );
      if (!provider) {
        console.error('Cannot create provider');
        return;
      }
      const chainId = await provider.send('eth_chainId', []);
      setChainId(chainId);
      console.log(`Connected to chain:${state.chainId}`);

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
    } catch (error) {
      console.log('Error connecting to metamask', error);
    }
  }, [setChainId, setUserAddress, state.chainId]);

  const accountChanged = useCallback(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', (accounts: Array<string>) => {
        setUserAddress(accounts[0]);
      });
      window.ethereum.on('chainChanged', (chainId: string) => {
        setChainId(chainId);
      });
      window.ethereum.on('disconnect', () => {
        setUserAddress(null);
      });
    }
  }, [setChainId, setUserAddress]);

  useEffect(() => {
    connectWallet();
    accountChanged();
  }, [accountChanged, connectWallet]);

  return (
    <StyledHeader>
      <Logo>CMGame</Logo>
      <Wallet>
        {state.userAddress
            ? `${state.userAddress} on ${
                CHAIN_MAP.find(x => x.chainId === state.chainId)?.chainName
              }`
            : 'Connect wallet'}
      </Wallet>
    </StyledHeader>
  );
};

export { Header };
