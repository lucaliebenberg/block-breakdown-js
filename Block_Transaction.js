// JavaScript Blockchain
// Transaction

class Transaction {
    constructor(inputPublicKey, outputPublicKey, amount) {
      this.inputPublicKey = inputPublicKey
      this.outputPublicKey = outputPublicKey
      this.amount = amount
      this._setHash()
    }
  
    _setHash() {
      this.hash = this._calculateHash()
    }
  
    _calculateHash() {
      return sha256(this.inputPublicKey + this.outputPublicKey + this.amount).toString()
    }
  }