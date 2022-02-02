const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

var solcInput = {
    language: "Solidity",
    sources: { 
        contract: {
            content: source
        }
     },
    settings: {
        optimizer: {
            enabled: true
        },
        evmVersion: "byzantium",
        outputSelection: {
            "*": {
              "": [
                "legacyAST",
                "ast"
              ],
              "*": [
                "abi",
                "evm.bytecode.object",
                "evm.bytecode.sourceMap",
                "evm.deployedBytecode.object",
                "evm.deployedBytecode.sourceMap",
                "evm.gasEstimates"
              ]
            },
        }
    }
};

solcInput = JSON.stringify(solcInput);

result = solc.compile(solcInput);
parsed = JSON.parse(result);
console.log(JSON.stringify(parsed.contracts.contract["Inbox"], null, 2));

module.exports = parsed.contracts.contract["Inbox"]

// fs.writeFile("test.txt", result, function(err) {
//     if (err) {
//         console.log(err);
//     }
// });

// var jsonString = '{"some":"json"}';
// console.log(JSON.stringify(JSON.parse(jsonString),null,2));