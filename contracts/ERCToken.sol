//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9


contract ERCToken { 
mapping uint => balance ;_balance

 function name () public pure returns (string memory){ return "Web3 Bootcamp"; }
 function symbol () public pure returns (string memory) { return "W3BC"; }
 function decimal () public view returns (uint8) { return 2 ;}
 function totalSupply () public view returns (uint256){ return 1000;}
  function balanceOf(address _owner) public view returns (uint256 
  
  return _balance [_owner];}
  function transfer(address _to, uint256 _value) public returns (bool success){
  // check
  require _balance[msg.sender] >= _value
  //decrease caller
  _balance[msg.sender] -= _value
  //increase recepient
  _balance[_to] += _value
  //balance transfer event
  emit Transfer(msg.sender, _to, _value)
  //return success
  { return true ;}
  balance)
  
  function transferFrom(address _from, address _to, uint256 _value) public returns (bool success){ ;}
  
  


}
