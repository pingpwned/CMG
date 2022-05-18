import { expect } from 'chai';
import { ethers } from 'hardhat';
import { Game, BlackBox } from '../typechain-types';
import { contracts } from '../typechain-types/factories';

describe('Game', () => {
  let Game: contracts.Game__factory;
  let BlackBox: contracts.BlackBox__factory;
  let boxContract: BlackBox;
  let gameContract: Game;

  beforeEach(async () => {
    Game = (await ethers.getContractFactory('Game')) as contracts.Game__factory;
    BlackBox = (await ethers.getContractFactory('BlackBox')) as contracts.BlackBox__factory;
    boxContract = await BlackBox.deploy();
    await boxContract.deployed();
    gameContract = await Game.deploy(boxContract.address);
    await gameContract.deployed();
  });

  it('Should fail when submitting score before starting game', async () => {
    await expect(gameContract.submitScore(100)).to.be.revertedWith('Please, sign game start first');
  });

  it('Should fail if player is trying to cheat', async () => {
    await expect(gameContract.start('Name')).to.emit(gameContract, 'GameStarted').withArgs(true);
    await expect(gameContract.submitScore(100)).to.be.revertedWith("Don't cheat");
  });

  it('Should start game and then submit score', async () => {
    await expect(gameContract.start('Name')).to.emit(gameContract, 'GameStarted').withArgs(true);
    setTimeout(async () => {
      await expect(gameContract.submitScore(100))
        .to.emit(gameContract, 'NewScore')
        .withArgs({ name: 'Name', score: 100 });
    }, 100 / 12);
  });
});
