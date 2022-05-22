//SPDX-License-Identifier: Unlincenced

pragma solidity ^0.8.7;

import '@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol';

contract BlackBox is Initializable, OwnableUpgradeable, UUPSUpgradeable {
    uint256 public difficulty;
    mapping(uint256 => uint256) public usersList;
    mapping(uint256 => uint256) public usersScore;

    bool public success;

    function initialize() public initializer { 
        __Ownable_init();
        difficulty = 20;
        success = false;
    }

    function setDifficulty(uint256 _difficulty) public onlyOwner {
        difficulty = _difficulty;
    }

    function start(uint256 _id) external {
        uint256 startTime = block.timestamp;
        usersList[_id] = startTime;
        success = false;
    }

    function submitScore(uint256 _id, uint256 _score) external {
        uint256 userTimestamp = usersList[_id];
        delete usersList[_id];
        require(userTimestamp != 0, 'Please, sign game start first');
        uint256 gameTime = block.timestamp - userTimestamp;

        require(_score / gameTime < difficulty, "Don't cheat");
        usersScore[_id] = _score;
    }

    function validateScore(
        uint256 _score,
        uint256 _gameTime,
        uint256 _id
    ) internal {
        require(_score / _gameTime < difficulty, "Don't cheat!");
        usersScore[_id] = _score;
    }

    function getScoreForUserId(uint256 _id) external view returns (uint256) {
        return usersScore[_id];
    }

    function removeScoreForUserId(uint256 _id) external {
        delete usersScore[_id];
    }

    function resetUserStart(uint256 _id) external {
        delete usersList[_id];
    }

    function _authorizeUpgrade(address newImplementation) internal override onlyOwner {}
}
