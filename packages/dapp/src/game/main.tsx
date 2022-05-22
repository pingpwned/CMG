import React, { useEffect, useRef } from 'react';

import { bindActionCreators } from 'redux';
import { store, actionCreators } from '@state';

import Phaser from 'phaser';
import { gameConfig as game } from '@game/gameConfig';
import { GameMountPoint } from '@components';

interface ParentCompProps {
  leaderboard?: React.ReactNode;
}
function Game (props: ParentCompProps) {
  const actions = bindActionCreators(actionCreators, store.dispatch);
  const inputRef = useRef<HTMLInputElement>(null);

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
      (inputRef.current as HTMLInputElement).value = name;
    });
  }, []);
  return (
    <GameMountPoint id="phaser-game">
      {leaderboard}
      <input
        ref={inputRef}
        type="text"
        id="name"
        style={{ display: 'none', maxWidth: 184 }}
        value={(inputRef.current as HTMLInputElement).value}
        onInput={e => actions.setPlayerName((e.target as HTMLInputElement).value)}
      />
    </GameMountPoint>
  );
};

export default Game;