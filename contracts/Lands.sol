pragma solidity ^0.4.18;

contract Lands {

  struct UserStruct {
    // the index is how we track the user in userIndex array
    uint index;

    /*Coord coord;*/
    /*int[] polygonCoords;    //TODO: determine size needed*/

    //do we want to put messages?
    string message;
  }

  mapping (address => UserStruct) private userStructs;
  address[] private users;


  //events
  event createUserEvent (
    uint userIndex
  );

  //constructor
  function Lands() {
  }

  function createUser(string _message) public returns(uint) {
    userStructs[msg.sender].index = users.push(msg.sender);
    /*userStructs[msg.sender].polygonCoords = _polygonCoords;*/
    userStructs[msg.sender].message = _message;

    createUserEvent(userStructs[msg.sender].index);
    return userStructs[msg.sender].index;
  }

  /********************
   * GETTERS
   *********************/

  function getUserCount() public view returns(uint) {
    return users.length;
  }

  function getUserAddress(uint index) public view returns(address) {
    return users[index];
  }


}
