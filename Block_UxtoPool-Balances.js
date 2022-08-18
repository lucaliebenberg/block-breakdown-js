// JavaScript Blockchain
// UXTO Pool - keep track of the balances

class UTXOPool {
    handleTransaction(transaction) {
      if (!this.isValidTransaction(transaction.inputPublicKey, transaction.amount))
        return
      const inputUTXO = this.utxos[transaction.inputPublicKey];
      inputUTXO.amount -= transaction.amount
      if (inputUTXO.amount === 0)
        delete this.utxos[transaction.inputPublicKey]
      this.addUTXO(transaction.outputPublicKey, transaction.amount)
    }
  
    isValidTransaction(inputPublicKey, amount) {
      const utxo = this.utxos[inputPublicKey]
      return utxo !== undefined && utxo.amount >= amount && amount > 0
    }
  }