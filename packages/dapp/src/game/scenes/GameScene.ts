import Phaser from 'phaser';
import { ethers } from 'ethers';
import { sceneConfig } from '@game/sceneConfig';
import { bindActionCreators } from 'redux';
import { store, State, actionCreators } from '@state';
import abi, { contractAddress as address } from '@web3/gameContract';

class GameScene extends Phaser.Scene {
  private platforms?: Phaser.Physics.Arcade.StaticGroup;
  private player?: Phaser.Physics.Arcade.Sprite;
  private stars?: Phaser.Physics.Arcade.Group;
  private scoreTxt?: Phaser.GameObjects.Text;
  private address?: Phaser.GameObjects.Text;
  private actions?: typeof actionCreators;
  private bombs?: Phaser.GameObjects.Group;
  private gameOver: boolean;
  private music?: Phaser.Sound.BaseSound;
  private MarioDieSound?: Phaser.Sound.BaseSound;

  private state: State = store.getState();

  constructor() {
    super(sceneConfig);
    this.gameOver = false;
    store.subscribe(() => {
      this.state = store.getState();
    });
  }

  public preload() {
    this.state = store.getState();
    this.actions = bindActionCreators(actionCreators, store.dispatch);
    this.load.audio('cute_monster', 'static/cute_monster.mp3');
    this.load.audio('Mario_die', 'static/Mario_1-die.mp3');
    this.load.image('sky', 'static/sky.png');
    this.load.image('ground', 'static/platform_mario.png');
    this.load.image('star', 'static/coin.png');
    this.load.image('bomb', 'static/bomb.png');
    this.load.spritesheet('dude', 'static/mario.png', {
      frameWidth: 32,
      frameHeight: 48,
    });
  }

  public create() {
    this.add.image(400, 300, 'sky');

    this.music = this.sound.add('cute_monster');
    this.MarioDieSound = this.sound.add('Mario_die');
    this.music.play();

    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(400, 568, 'ground').setScale(2).refreshBody();
    this.platforms.create(600, 400, 'ground');
    this.platforms.create(50, 250, 'ground');
    this.platforms.create(750, 220, 'ground');

    this.player = this.physics.add.sprite(100, 450, 'dude');
    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1,
    });
    this.anims.create({
      key: 'turn',
      frames: [{ key: 'dude', frame: 4 }],
      frameRate: 20,
    });
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1,
    });

    this.physics.add.collider(this.player, this.platforms);

    this.stars = this.physics.add.group({
      key: 'star',
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 },
    });

    this.stars.children.iterate((child: any) => {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    this.physics.add.collider(this.stars, this.platforms);
    this.physics.add.overlap(this.player, this.stars, this.collectStar, undefined, this);

    this.bombs = this.physics.add.group();

    this.physics.add.collider(this.bombs, this.platforms);
    this.physics.add.collider(this.player, this.bombs, this.hitBomb, undefined, this);

    this.scoreTxt = this.add.text(16, 16, 'score: 0', {
      fontSize: '32px',
      color: '#000',
    });

    const trimAddress = `${this.state.connection.userAddress.substring(
      0,
      4,
    )}..${this.state.connection.userAddress.substring(
      this.state.connection.userAddress.length - 4,
      this.state.connection.userAddress.length,
    )}`;

    this.address = this.add.text(690, 15, trimAddress, {
      color: '#0f0',
    });
  }

  public update() {
    const cursors = this.input.keyboard.createCursorKeys();

    if (cursors.left.isDown) {
      this.player?.setVelocityX(-160);

      this.player?.anims.play('left', true);
    } else if (cursors.right.isDown) {
      this.player?.setVelocityX(160);

      this.player?.anims.play('right', true);
    } else {
      this.player?.setVelocityX(0);

      this.player?.anims.play('turn');
    }

    if (cursors.up.isDown && this.player?.body.touching.down) {
      this.player.setVelocityY(-330);
    }

    if (this.state?.connection?.gameOver && !this.state?.connection?.submitScore) {
      this.actions?.submitScore();
      this.submitScore();
    }
  }

  private submitScore = async () => {
    const contract: ethers.Contract = new ethers.Contract(
      address,
      abi,
      this.state.connection.provider.getSigner(),
    );
    await contract.submitScore(this.state.connection.score);
  };

  public collectStar(player: any, star: any) {
    star.disableBody(true, true);

    this.actions?.setScore();

    this.scoreTxt?.setText(`Score: ${this.state.connection.score}`);

    if (this.stars?.countActive(true) === 0) {
      this.stars.children.iterate((child: any) => {
        child.enableBody(true, child.x, 0, true, true);
      });

      const x = player.x < 400 ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);

      const bomb = this.bombs?.create(x, 16, 'bomb');
      bomb.setBounce(1);
      bomb.setCollideWorldBounds(true);
      bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
  }

  public hitBomb(player: any) {
    this.physics.pause();
    this.music?.pause();
    this.MarioDieSound?.play();
    player.setTint(0xff0000);
    player.anims.play('turn');
    this.MarioDieSound?.once('complete', (music: Phaser.Sound.BaseSound) => {
      music.stop();
      this.gameOver = true;
      this.actions?.setGameOver();
    });
  }
}

export default GameScene;
