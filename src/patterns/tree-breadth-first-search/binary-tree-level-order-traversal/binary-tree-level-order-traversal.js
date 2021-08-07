const { BinaryTreeNode, Queue } = require("../../../utils")

/**
 * Returns 2d array with tree levels
 * @constructor
 * @param {BinaryTreeNode} head - head of binary tree
 */
const binaryTreeLevelOrderTraversal = (head) => {
  const result = []
  const queue = new Queue()
  queue.push(head)

  while (queue.length > 0) {
    const levelSize = queue.length

    const level = []
    for (let i = 0; i < levelSize; i++) {
      const node = queue.pop()
      level.push(node.value)

      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }

    result.push(level)
  }

  return result
}

module.exports = binaryTreeLevelOrderTraversal
