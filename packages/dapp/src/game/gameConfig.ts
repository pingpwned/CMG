import Phaser from 'phaser';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';

export const gameConfig: Phaser.Types.Core.GameConfig = {
  title: "Sample",

  type: Phaser.AUTO,

  scale: {
    width: 800,
    height: 600,
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
  },

  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false
    }
  },

  parent: "game",
  backgroundColor: "#333333",

  scene: [BootScene, GameScene]
};
