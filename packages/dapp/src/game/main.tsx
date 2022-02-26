import React, { useEffect } from 'react';

import Phaser from 'phaser';
import { gameConfig as game } from '@game/gameConfig';
import { GameMountPoint } from '@components';

interface ParentCompProps {
  leaderboard?: React.ReactNode;
}
const Game: React.FC<ParentCompProps> = props => {
  const { leaderboard } = props;
  const Game = class extends Phaser.Game {
    constructor() {
      super(game);
    }
  };
  useEffect(() => {
    window.game = new Game();
  }, []);
  return <GameMountPoint id="phaser-game">{leaderboard}</GameMountPoint>;
};

export default Game;
