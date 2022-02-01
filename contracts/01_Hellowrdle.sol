// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract HelloWrdle {

    string number;

    constructor() {
        number = "hellowrdle";
    }

    function retrieve() public view returns (string memory){
        return number;
    }
}