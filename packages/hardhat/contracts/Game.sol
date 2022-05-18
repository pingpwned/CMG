//SPDX-License-Identifier: Unlincenced

pragma solidity ^0.8.7;

import './BlackBox.sol';

contract Game {
  BlackBox box;
  uint256 id;
  mapping(address => uint256) public addressList;
  mapping(uint256 => string) public nameList;
  mapping(string => uint256) public userScore;
  struct Player {
    string name;
    uint256 score;
  }
  Player[] public players;
  event GameStarted(bool start);
  event NewScore(Player[] players);

  constructor(address _box) {
    box = BlackBox(_box);
    id = 1;
  }

  function start(string memory _name) public {
    addressList[msg.sender] = id;
    nameList[id] = _name;
    box.start(addressList[msg.sender]);
    id++;
    emit GameStarted(true);
  }

  function submitScore(uint256 _score) public {
    uint256 userId = addressList[msg.sender];
    string memory name = nameList[userId];
    box.submitScore(userId, _score);
    userScore[name] = _score;
    Player memory player = Player(nameList[userId], userScore[name]);
    players.push(player);
    delete addressList[msg.sender];
    emit NewScore(players);
  }

  function getAll() public view returns (Player[] memory) {
    return players;
  }
}
