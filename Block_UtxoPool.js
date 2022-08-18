// JavaScript Blockchain
// UTXO Pool(s)


class UTXOPool {
    constructor(utxos = {}) {
      this.utxos = utxos
    }
  
    addUTXO(publicKey, amount) {
      if (this.utxos[publicKey]) {
        this.utxos[publicKey].amount += amount
      } else {
        const utxo = new UTXO(publicKey, amount)
        this.utxos[publicKey] = utxo
      }
    }
  
    clone() {
      return new UTXOPool(clone(this.utxos))
    }
  }
  
  class Blockchain {
    _addBlock(block) {
      if (!block.isValid())
        return
      if (this.containsBlock(block))
        return
  
      // check that the parent is actually existent and the advertised height is correct
      const parent = this.blocks[block.parentHash];
      if (parent === undefined && parent.height + 1 !== block.height )
        return
  
      // Add coinbase coin to the pool of the parent
      const newUtxoPool = parent.utxoPool.clone();
      newUtxoPool.addUTXO(block.coinbaseBeneficiary, 12.5)
      block.utxoPool = newUtxoPool;
  
      this.blocks[block.hash] = block;
      rerender()
    }
  }