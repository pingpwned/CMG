import React, { useEffect } from 'react';

import { bindActionCreators } from 'redux';
import { store, actionCreators } from '@state';

import Phaser from 'phaser';
import { gameConfig as game } from '@game/gameConfig';
import { GameMountPoint } from '@components';

interface ParentCompProps {
  leaderboard?: React.ReactNode;
}
const Game: React.FC<ParentCompProps> = props => {
  const actions = bindActionCreators(actionCreators, store.dispatch);
  let playerName!: string;

  const { leaderboard } = props;
  const Game = class extends Phaser.Game {
    constructor() {
      super(game);
    }
  };
  useEffect(() => {
    window.game = new Game();
    store.subscribe(() => {
      const state = store.getState();
      const { name } = state.connection;
      playerName = name;
    });
  }, []);
  return (
    <GameMountPoint id="phaser-game">
      {leaderboard}
      <input
        type="text"
        id="name"
        style={{ display: 'none', maxWidth: 184 }}
        value={playerName}
        onInput={e => actions.setPlayerName((e.target as HTMLInputElement).value)}
      />
    </GameMountPoint>
  );
};

export default Game;
