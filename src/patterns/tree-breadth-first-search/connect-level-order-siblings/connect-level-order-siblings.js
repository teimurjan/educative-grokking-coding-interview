const { BinaryTreeSiblingNode, Queue } = require("../../../utils")

/**
 * Returns 2d array with tree levels
 * @constructor
 * @param {BinaryTreeSiblingNode} head - head of binary tree
 */
const connectLevelOrderSiblings = (head) => {
  const queue = new Queue()
  queue.push(head)


  while (queue.length > 0) {
    const levelSize = queue.length
    
    let prevNode = null
    for (let i = 0; i < levelSize; i++) {
      const node = queue.pop()

      if (prevNode) {
        prevNode.next = node
      }

      prevNode = node

      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }

  }

  return head
}

module.exports = connectLevelOrderSiblings
