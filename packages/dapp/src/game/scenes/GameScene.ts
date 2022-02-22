import Phaser from 'phaser';
import { sceneConfig } from '../sceneConfig';
import { store, State } from '../../state';
import { ActionType } from '../../state/action-types';

class GameScene extends Phaser.Scene {
  private platforms?: Phaser.Physics.Arcade.StaticGroup;
  private player?: Phaser.Physics.Arcade.Sprite;
  private stars?: Phaser.Physics.Arcade.Group;
  private score: number = 0;
  private scoreTxt?: Phaser.GameObjects.Text;
  private address?: Phaser.GameObjects.Text;
  private bombs?: Phaser.GameObjects.Group;
  private gameOver: boolean;
  private state: State =  store.getState();

  constructor() {
    super(sceneConfig);
    this.gameOver = false;
    store.subscribe(() => {
      this.state = store.getState();

      //const {gameOver, score} = this.state.connection;

      // if (userAddress && chainId) {
      //   const trimAddress = `${userAddress.substring(0,4)}..${userAddress.substring(userAddress.length-4,userAddress.length)}`;
      //   helloButton.setText(`${trimAddress} at ${chainId}`);
      // } else {
      //   helloButton.setText(this.TEXT_CONNECT_BUTTON);
      // }
    });
  }

  public preload() {
    this.state = store.getState();
    this.load.image("sky", "assets/sky.png");
    this.load.image("ground", "assets/platform_mario.png");
    this.load.image("star", "assets/coin.png");
    this.load.image("bomb", "assets/bomb.png");
    this.load.spritesheet("dude", "assets/mario.png", {
      frameWidth: 32,
      frameHeight: 48
    });
  }

  public create() {
    // this.state = store.getState();
    // store.subscribe(() => {
    //   this.state = store.getState();
    //   console.log(this.state, 'subscribe');
    //   this.address?.setText(this.state.connection.userAddress || "");
    //
    //   //const {gameOver, score} = this.state.connection;
    //
    //   // if (userAddress && chainId) {
    //   //   const trimAddress = `${userAddress.substring(0,4)}..${userAddress.substring(userAddress.length-4,userAddress.length)}`;
    //   //   helloButton.setText(`${trimAddress} at ${chainId}`);
    //   // } else {
    //   //   helloButton.setText(this.TEXT_CONNECT_BUTTON);
    //   // }
    // });

    this.add.image(400, 300, "sky");

    this.platforms = this.physics.add.staticGroup();

    this.platforms
      .create(400, 568, "ground")
      .setScale(2)
      .refreshBody();

    this.platforms.create(600, 400, "ground");
    this.platforms.create(50, 250, "ground");
    this.platforms.create(750, 220, "ground");

    this.player = this.physics.add.sprite(100, 450, "dude");

    this.player.setBounce(0.2);
    this.player.setCollideWorldBounds(true);

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
    });

    this.anims.create({
      key: "turn",
      frames: [{ key: "dude", frame: 4 }],
      frameRate: 20
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
      frameRate: 10,
      repeat: -1
    });

    this.physics.add.collider(this.player, this.platforms);

    this.stars = this.physics.add.group({
      key: "star",
      repeat: 11,
      setXY: { x: 12, y: 0, stepX: 70 }
    });

    this.stars.children.iterate((child: any) => {
      child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
    });

    this.physics.add.collider(this.stars, this.platforms);
    this.physics.add.overlap(
      this.player,
      this.stars,
      this.collectStar,
      undefined,
      this
    );

    this.bombs = this.physics.add.group();

    this.physics.add.collider(this.bombs, this.platforms);
    this.physics.add.collider(
      this.player,
      this.bombs,
      this.hitBomb,
      undefined,
      this
    );

    this.scoreTxt = this.add.text(16, 16, "score: 0", {
      fontSize: "32px",
      color: "#000"
    });

    this.address = this.add.text(15, 15, this.state.connection.userAddress || "lol", { color: '#0f0' });

    console.log(this.state)


  }

  public update() {
    const cursors = this.input.keyboard.createCursorKeys();

    if (cursors.left.isDown) {
      this.player?.setVelocityX(-160);

      this.player?.anims.play("left", true);
    } else if (cursors.right.isDown) {
      this.player?.setVelocityX(160);

      this.player?.anims.play("right", true);
    } else {
      this.player?.setVelocityX(0);

      this.player?.anims.play("turn");
    }

    if (cursors.up.isDown && this.player?.body.touching.down) {
      this.player.setVelocityY(-330);
    }
  }
  public collectStar(
    player: any,
    star: any
  ) {
    star.disableBody(true, true);

    store.dispatch({type: ActionType.SET_SCORE});

    this.scoreTxt?.setText("Score: " + this.state.connection.score);

    if (this.stars?.countActive(true) === 0) {
      this.stars.children.iterate((child: any) => {
        child.enableBody(true, child.x, 0, true, true);
      });

      let x =
        player.x < 400
          ? Phaser.Math.Between(400, 800)
          : Phaser.Math.Between(0, 400);

      let bomb = this.bombs?.create(x, 16, "bomb");
      bomb.setBounce(1);
      bomb.setCollideWorldBounds(true);
      bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
    }
  }

  public hitBomb(player: any) {
    this.physics.pause();
    player.setTint(0xff0000);
    player.anims.play("turn");
    this.gameOver = true;
    console.log(this.scoreTxt, 'from hitBomb');
    store.dispatch({type: ActionType.SET_GAME_OVER, payload: this.gameOver});
  }
}

export default GameScene;
