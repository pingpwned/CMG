import React, { useRef, useEffect } from 'react'

import { useSelector } from 'react-redux';
import { State } from './state';

import { IonPhaser } from '@ion-phaser/react'
import { Header } from './components/Header';
import './App.css';
import { gameConfig as game } from './game/gameConfig';


const App: React.FC = () => {
  const state = useSelector((state: State) => state.connection);
  const gameRef = useRef<HTMLIonPhaserElement>(null);
  const destroy = () => {
     if (gameRef.current) {
       gameRef.current.destroy();
     }
  }

  (state.userAddress === null || state.userAddress === undefined) && destroy()

  return (
    <>
    <Header />
    <div className="App">
    {!state.userAddress ?
      <span>
        <h3>Crypto Mario Game! Welcome!</h3>
        <p>Connect your metamask wallet to start playing</p>
      </span>
     :
      <IonPhaser ref={gameRef} game={game} initialize={state.userAddress !== null && state.userAddress !== undefined} />
    }
    </div>
    </>
  );
}

export default App;
