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
    event setCount ( oldCOunt, newCount );
    //modifier voteCount() { count < 1 , "user has voted");
   // _;
    //bool public hasVoted = true;
   function Count () public hasNotVoted = false returns bool };
    if Count = false; count --;
//Adds New Candidate
    function addCandidate() public {}

// Removes Already Added Candidate
    function removeCandidate() public {}

// Retrieves All Candidates for Viewing
    function getAllCandidates()  public pure returns ( string calldata, uint){
        [string calldata name,
        uint  age];

        return (name, age);
    };


// Allows Voter to Cast a Vote for a Single Candidate
async function castVote() public returns bool {
    emit voteCount (+1)_;

};