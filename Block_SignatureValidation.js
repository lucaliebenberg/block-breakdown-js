// JavaScript Blockchain
// Signature validation of the transaction and the block

class Transaction {
    constructor(inputPublicKey, outputPublicKey, amount, fee, signature) {
      this.inputPublicKey = inputPublicKey;
      this.outputPublicKey = outputPublicKey;
      this.amount = amount;
      this.fee = fee;
      this.signature = signature;
      this._setHash();
    }
  
    hasValidSignature() {
      return (
        this.signature !== undefined &&
        verifySignature(this.hash, this.signature, this.inputPublicKey)
      );
    }
  }
  
  class Block {
    isValidTransaction(transaction) {
      return (
        this.utxoPool.isValidTransaction(transaction) &&
        transaction.hasValidSignature()
      );
    }
  }
