const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

//const web3 = new Web3(ganache.provider);


beforeEach(() => {
    console.log('test prep');
    web3.eth.getAccounts()
        .then(accounts => {
            console.log(accounts);
        })
        .catch(err => {
            console.log(err);
        });
});

describe('Inbox',() => {
    it('deploys a contract', () => {
        assert(true, 'ok');
    });
} )