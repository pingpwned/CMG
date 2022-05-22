import { expect } from 'chai';
import { Contract } from 'ethers';
import { ethers, upgrades } from 'hardhat';
import { BlackBox__factory, gameSol } from '../typechain-types/factories/contracts';

describe('UUPS proxy test', () => {
    let Game: gameSol.Game__factory;
    let BlackBox: BlackBox__factory;
    
    let GameV2: gameSol.GameV2__factory;

  beforeEach('Get factories', async () => {
    Game = (await ethers.getContractFactory('Game')) as gameSol.Game__factory;
    BlackBox = (await ethers.getContractFactory('BlackBox')) as BlackBox__factory;
    GameV2 = (await ethers.getContractFactory('GameV2')) as gameSol.GameV2__factory;
  });
  
  it('deploys contracts & upgrades Game to GameV2', async () => {
    const box = await upgrades.deployProxy(BlackBox, undefined, {kind: 'uups'});
    await box.deployed();
    const game = await upgrades.deployProxy(Game, [box.address], {kind: 'uups'});
    await game.deployed();

    console.log(`   BlackBox: ${box.address}\n   Game: ${game.address}`);

    const gamev2 = await upgrades.upgradeProxy(game, GameV2);

    console.log(`   Upgraded Game: `, gamev2.address);
  });
});

describe('Game', () => {
  let Game: gameSol.Game__factory;
  let BlackBox: BlackBox__factory;
  let box: Contract;
  let game: Contract;
  let GameV2: gameSol.GameV2__factory;
  let gamev2: Contract;

  before(async () => {
    Game = (await ethers.getContractFactory('Game')) as gameSol.Game__factory;
    BlackBox = (await ethers.getContractFactory('BlackBox')) as BlackBox__factory;
    
    box = await upgrades.deployProxy(BlackBox, undefined, {kind: 'uups'});
    await box.deployed();
    game = await upgrades.deployProxy(Game, [box.address], {kind: 'uups'});
    await game.deployed();

    GameV2 = (await ethers.getContractFactory('GameV2')) as gameSol.GameV2__factory;

    gamev2 = await upgrades.upgradeProxy(game, GameV2);

    
  });

  it('Should fail when submitting score before starting game', async () => {
    await expect(gamev2.submitScore(100)).to.be.revertedWith('Please, sign game start first');
  });

  it('Should fail if player is trying to cheat', async () => {
    await expect(gamev2.start('Name')).to.emit(gamev2, 'GameStarted').withArgs(true);
    await expect(gamev2.submitScore(100)).to.be.revertedWith("Don't cheat");
  });

  it('Should start game and then submit score', async () => {
    await expect(gamev2.start('Name')).to.emit(gamev2, 'GameStarted').withArgs(true);
    setTimeout(async () => {
      await expect(gamev2.submitScore(100))
        .to.emit(gamev2, 'NewScore')
        .withArgs({ name: 'Name', score: 100 });
    }, 100 / 12);
  });
});
