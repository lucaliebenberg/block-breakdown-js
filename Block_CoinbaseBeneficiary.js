// JavaScript Blockchain
// Coinbase Beneficiary

class Block {
    isValid() {
      return this.parentHash === 'root' ||
        (this.hash.substr(-DIFFICULTY) === "0".repeat(DIFFICULTY) &&
        this.hash === this._calculateHash())
    }
  
    createChild(coinbaseBeneficiary) {
      return new Block({
        blockchain: this.blockchain,
        parentHash: this.hash,
        height: this.height + 1,
        coinbaseBeneficiary
      })
    }
  
    _calculateHash() {
      return sha256(this.nonce + this.parentHash + this.coinbaseBeneficiary).toString()
    }
  }