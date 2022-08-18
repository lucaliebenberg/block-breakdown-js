// JavaScript Blockchain
// Node verification of the transactions 

class Blockchain {
    _addBlock(block) {
      // ...
      const newUtxoPool = parent.utxoPool.clone();
      block.utxoPool = newUtxoPool;
  
      // Add coinbase coin to the pool
      block.utxoPool.addUTXO(block.coinbaseBeneficiary, 12.5)
  
      // Reapply transactions to validate them
      const transactions = block.transactions
      block.transactions = {}
      let containsInvalidTransactions = false;
  
      Object.values(transactions).forEach(transaction => {
        if (block.isValidTransaction(transaction.inputPublicKey, transaction.amount)) {
          block.addTransaction(transaction.inputPublicKey, transaction.outputPublicKey, transaction.amount)
        } else {
          containsInvalidTransactions = true
        }
      })
  
      // If we found any invalid transactions, dont add the block
      if (containsInvalidTransactions)
        return
      // ...
    }
  }