import Phaser from 'phaser';
import GameScene from './GameScene';

export const gameConfig: Phaser.Types.Core.GameConfig = {
  title: "Sample",

  type: Phaser.AUTO,

  scale: {
    width: 800,
    height: 600,
    autoCenter: Phaser.Scale.CENTER_BOTH,
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

  scene: GameScene
};
