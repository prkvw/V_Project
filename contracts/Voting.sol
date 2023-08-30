// SPDX-License-Identifier: MIT
pragma solidity >=0.8.9 <0.9.0;

contract Voting {
    function vote () public {
    // check if voter is registered
    mapping (address => bool) voters;


    //track voters voted
    mapping (address => bool) hasVoted;

    //Track candidates
    mapping (address => bool) candidates;

    //vote


    require (voters[msg.sender],"voter is not registered");
    // check if voter has not voted
    require (hasVoted[msg.sender],"voter has already voted")
    // check if candidate is valid
    require ( candidates[msg.sender], "Invalid candidate")
    // Increase candidate vote
    // mark voter as voted
    //Increase the vote tally

    }
    function addCandidates () public ()

    function deleteCandidates () ()
    
}