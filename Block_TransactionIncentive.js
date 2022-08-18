// JavaScript Blockchain
// Provides a transaction incentive to the miner 

class Block {
    addTransaction(inputPublicKey, outputPublicKey, amount, fee) {
      if (!this.isValidTransaction(inputPublicKey, amount, fee))
        return
      const transaction = new Transaction(inputPublicKey, outputPublicKey, amount, fee)
      this.transactions[transaction.hash] = transaction
      this.utxoPool.handleTransaction(transaction, this.coinbaseBeneficiary)
      this._setHash();
    }
  }
  
  class UTXOPool {
    handleTransaction(transaction, feeReceiver) {
      if (!this.isValidTransaction(transaction.inputPublicKey, transaction.amount, transaction.fee))
        return
      const inputUTXO = this.utxos[transaction.inputPublicKey];
      inputUTXO.amount -= transaction.amount
      inputUTXO.amount -= transaction.fee
      if (inputUTXO.amount === 0)
        delete this.utxos[transaction.inputPublicKey]
      this.addUTXO(transaction.outputPublicKey, transaction.amount)
      this.addUTXO(feeReceiver, transaction.fee)
    }
  }