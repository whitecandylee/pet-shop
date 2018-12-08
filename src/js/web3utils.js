const fs = require('fs');

const Web3 = require('web3');

const web3 = new Web3(Web3.currentProvider || new Web3.providers.HttpProvider('http://localhost:7545'));


function createContract(jsonFile, address, fromAddress) {
    const parsed = JSON.parse(fs.readFileSync(jsonFile).toString('utf8'));
    const abi = parsed.abi;

    const myContract = new web3.eth.Contract(abi, address, {
        from: fromAddress, // default from address
        gasPrice: '20000000000' // default gas price in wei, 20 gwei in this case
    });


    return myContract;
}

exports = module.exports = {
    web3: web3,
    createContract: createContract

};