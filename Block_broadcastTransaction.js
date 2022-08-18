// JavaScript Blockchain
// Broadcast the transaction to other nodes on the network

class Blockchain {
    constructor() {
      // ...
      subscribeTo("TRANSACTION_BROADCAST", ({ transaction, blockchainName }) => {
        if (blockchainName === this.name) {
          this.pendingTransactions[transaction.hash] = new Transaction(
            transaction.inputPublicKey,
            transaction.outputPublicKey,
            transaction.amount
          );
        }
      });
    }
  }