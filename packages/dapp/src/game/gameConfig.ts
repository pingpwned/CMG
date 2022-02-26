import Phaser from 'phaser';
import GameScene from '@game/scenes/GameScene';
import BootScene from '@game/scenes/BootScene';

export const gameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Crypto Mario Game',
  parent: 'phaser-game', // id to mount

  type: Phaser.CANVAS,
  width: 800,
  height: 600,

  scale: {
    min: {
      width: 375,
      height: 600,
    },
    max: {
      width: 800,
      height: 600,
    },
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    zoom: 1,
  },

  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  backgroundColor: '#333333',

  scene: [BootScene, GameScene],
};
