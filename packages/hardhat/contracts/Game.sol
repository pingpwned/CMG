//SPDX-License-Identifier: Unlincenced

pragma solidity ^0.8.7;

import './BlackBox.sol';

contract Game {
  BlackBox box;
  uint256 id;
  mapping(address => uint256) public addressList;
  mapping(address => uint256) public userScore;
  struct Player {
    uint256 id;
    uint256 score;
  }
  Player[] public players;
  event GameStarted(bool start);
  event NewScore(Player[] players);

  constructor(address _box) {
    box = BlackBox(_box);
    id = 1;
  }

  function start() public {
    addressList[msg.sender] = id;
    box.start(addressList[msg.sender]);
    id += 1;
    emit GameStarted(true);
  }

  function submitScore(uint256 score) public {
    uint256 _userId = addressList[msg.sender];
    box.submitScore(_userId, score);
    userScore[msg.sender] = score;
    Player memory player = Player(addressList[msg.sender], userScore[msg.sender]);
    players.push(player);
    delete addressList[msg.sender];
    emit NewScore(players);
  }

  function getAll() public view returns (Player[] memory) {
    return players;
  }
}
