// JavaScript Blockchain
// Proof of Work (POW)

class Block {
    isValid() {
      return this.parentHash === 'root' ||
        (this.hash.substr(-DIFFICULTY) === "0".repeat(DIFFICULTY) &&
        this.hash === sha256(this.nonce + this.parentHash).toString())
    }
  
    setNonce(nonce) {
      this.nonce = nonce
      this._setHash()
    }
  
    _setHash() {
      this.hash = sha256(this.nonce + this.parentHash).toString()
    }
  }