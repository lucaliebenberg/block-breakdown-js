// JavaScript Blockchain
// The longest chain

class Blockchain {
    longestChain() {
      const blocks = values(this.blocks)
      const maxByHeight = maxBy(prop('height'))
      const maxHeightBlock = reduce(maxByHeight, blocks[0], blocks)
      const getParent = (x) => {
        if (x === undefined) {
          return false
        }
  
        return [x, this.blocks[x.parentHash]]
      }
      return reverse(unfold(getParent, maxHeightBlock))
    }
  }