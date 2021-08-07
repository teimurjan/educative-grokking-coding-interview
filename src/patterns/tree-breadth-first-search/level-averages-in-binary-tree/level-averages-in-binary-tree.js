const { BinaryTreeNode, Queue } = require("../../../utils")

/**
 * Returns 2d array with tree levels
 * @constructor
 * @param {BinaryTreeNode} head - head of binary tree
 */
const levelAveragesInBinaryTree = (head) => {
  const result = []
  const queue = new Queue()
  queue.push(head)

  while (queue.length > 0) {
    const levelSize = queue.length

    let sum = 0
    for (let i = 0; i < levelSize; i++) {
      const node = queue.pop()
      sum += node.value

      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }

    result.push(sum / levelSize)
  }

  return result
}

module.exports = levelAveragesInBinaryTree
