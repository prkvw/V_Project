// SPDX-License-Identifier: MIT

pragma solidity >=0.8.2 <0.9.0;



contract Voting {
// Define an Appropriate Data Type to Store Candidates
    struct Candidate{
        string firstName;
        string lastName;
        string party;
        string office;
        uint age;

    }
// Define an Appropriate Data Type to Track If Voter has Already Voted
    bool public bool_voted = true;
    bool public bool_notVoted = false;
// Adds New Candidate
function addCandidate() public {}

// Removes Already Added Candidate
function removeCandidate() public {}

// Retrieves All Candidates for Viewing
function getAllCandidates()  public pure returns ( uint){
        //string storage lastName;
        uint  age;

        return (age);
}
}

// Allows Voter to Cast a Vote for a Single Candidate
//function castVote() public {};