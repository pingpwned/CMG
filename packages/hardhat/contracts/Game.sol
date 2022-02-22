//SPDX-License-Identifier: Unlincenced

pragma solidity ^0.8.7;

import "./Blackbox.sol";

contract Game {

    BlackBox box;
    uint id;
    mapping(address => uint) public addressList;
    mapping(address => uint256) public leaderboard;

    constructor(address _box) {
        box = BlackBox(_box);
        id = 1;
    }

    function start() public {
        addressList[msg.sender] = id;
        box.start(addressList[msg.sender]);
        id += 1;
    }

    function submitScore(uint256 score) public {
        uint _userId = addressList[msg.sender];
        bool success = box.submitScore(_userId, score);
        if (success) {
            delete addressList[msg.sender];
            leaderboard[msg.sender] = score;
        }
    }

}
