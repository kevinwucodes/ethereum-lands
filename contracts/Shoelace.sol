pragma solidity ^0.4.18;

contract Shoelace {

  /***************
   * shoelace formula
   **************/

   function shoelace(int[] coords) public pure returns(bool) {
     //must be even set of coords and great or equal to 3 coord pairs
     require(coords.length >= 6 && coords.length % 2 == 0);

     //write shoelace theorem logic here

     return true;
   }

}
