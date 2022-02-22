import React, { useRef, useEffect } from 'react'

import { useSelector } from 'react-redux';
import { store, State } from './state';
import { ActionType } from './state/action-types';

import { IonPhaser } from '@ion-phaser/react'
import { Header } from './components/Header';
import { gameConfig as game } from './game/gameConfig';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Layout = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Modal = styled.div`
  z-index: 10000;
  background-color: #000000d4;;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalBox = styled(motion.div)`
  background-color: #ffffff;
  width: 45%;
  min-height: 20vh;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  position: relative;
`;
const ModalTitle = styled.h2``;
const ModalDesc = styled.p``;
const CloseButton = styled.span`
  cursor: pointer;

  position: absolute;
  top: 15px;
  right: 15px;

  width: 20px;
  height: 20px;


  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 20px;
    width: 2px;
    background-color: #929292;

    transition: all .2s ease-in-out;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:hover {
    &:before,
    &:after {
      background-color: #000;
    }
  }
`;



const App: React.FC = () => {
  const state = useSelector((state: State) => state.connection);
  const gameRef = useRef<HTMLIonPhaserElement>(null);
  const destroy = () => {
     if (gameRef.current) {
       gameRef.current.destroy();
     }
  }

  (state.userAddress === '0x0') && destroy()

  return (
    <Layout>
      {state.openProviderModal &&
        <Modal>
          <ModalBox  initial={{ y: "-300px", z: "-300px", opacity: 0 }} animate={{ y: 0, z: 0, opacity: 1 }}>
            <CloseButton onClick={() => store.dispatch({type: ActionType.OPEN_PROVIDER_MODAL})} />
            <ModalTitle>No provider detected 😱</ModalTitle>
            <ModalDesc>Seems like you have no Metamask installed. Please, refer to guide how to install Metamask and create a wallet. You also have to add some funds to pay network fee.</ModalDesc>
          </ModalBox>
        </Modal>
      }
      <div>
        <h3>Crypto Mario Game! Welcome!</h3>
        <p>Connect your metamask wallet to start playing</p>
      </div>

      <IonPhaser ref={gameRef} game={game} initialize={true} />

    </Layout>
  );
}

export default App;
