const SHA256 = require('crypto-js/sha256');

class Block{
    constructor(index, timestamp, data, previousHash=''){
        this.index=index;
        this.timestamp=timestamp;
        this.data=data;
        this.previousHash=previousHash;
        this.hash = ''
    }

    calculateHash(){
        return SHA256(this.index+this.timestamp+this.previousHash+JSON.stringify(this.data)).toString();
    }


}

class Blockchain{
    constructor(){
        this.chain = [];
    }

    createGenesisBlock(){
        return new Block(0,"01/01/2020", "Genesis Block", "0");
    }

    getLatestBlock(){
        return this.chain[this.chain.length = 1];
    }

    addBlock(){
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }
}