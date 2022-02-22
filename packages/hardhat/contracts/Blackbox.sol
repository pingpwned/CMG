//SPDX-License-Identifier: Unlincenced

pragma solidity ^0.8.7;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol";

contract BlackBox is Ownable {
    uint public difficulty;
    mapping(uint => uint256) public usersList;
    mapping(uint => uint256) public usersScore;

    bool public success;

    constructor() Ownable() {
      difficulty = 20;
      success = false;
    }

    function setDifficulty(uint _difficulty) public onlyOwner {
      difficulty = _difficulty;
    }

    function start(uint _id) external {
        uint256 startTime = block.timestamp;
        usersList[_id] = startTime;
        success = false;
    }

    function submitScore(uint _id, uint256 _score)external returns (bool) {
        uint256 userTimestamp = usersList[_id];
        delete usersList[_id];
        require(userTimestamp != 0, "Please, sign game start first");
        uint256 gameTime = block.timestamp - userTimestamp;

        //bool success = validateScore(_score, gameTime, _id);

        //validateScore(_score, gameTime, _id);

        if (_score / gameTime < difficulty) {
            usersScore[_id] = _score;
            return true;
        } else {
            return false;
        }

        // bytes memory payload = abi.encodeWithSignature("validateScore(uint256, uint256, uint)", _score, gameTime, _id);
        // (bool _success,) = address(this).call(payload);
        // success = _success;
        // require(success == true);
    }

    function validateScore(uint256 _score, uint256 _gameTime, uint _id) internal {
        require(_score / _gameTime < difficulty, "Don't cheat!");
        usersScore[_id] = _score;
    }

    function getScoreForUserId(uint _id) external view returns (uint256) {
        return usersScore[_id];
    }

    function removeScoreForUserId(uint _id) external {
        delete usersScore[_id];
    }

    function resetUserStart(uint _id) external {
        delete usersList[_id];
    }
}
