const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);
const { interface, bytecode } = require('../compile.js');

//const web3 = new Web3(ganache.provider);

let accounts;
beforeEach(async () => {
    console.log('test prep');
    accounts = await web3.eth.getAccounts();

    console.log(interface);
    // console.log(bytecode);

    const contract = new web3.eth.Contract(interface);
        
    contract.deploy({ data: bytecode, arguments: ['hello there'] });
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert(true, 'ok');
    });
})