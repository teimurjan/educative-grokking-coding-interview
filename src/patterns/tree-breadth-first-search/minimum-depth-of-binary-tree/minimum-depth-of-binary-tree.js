const { BinaryTreeNode, Queue } = require("../../../utils")

/**
 * Returns minimum depth of binary tree
 * @constructor
 * @param {BinaryTreeNode} head - head of binary tree
 */
const minimumDepthOfBinaryTree = (head) => {
  const queue = new Queue()
  queue.push(head)

  let currentLevel = 1
  while (queue.length > 0) {
    const levelSize = queue.length

    const level = []
    for (let i = 0; i < levelSize; i++) {
      const node = queue.pop()
      level.push(node.value)

      if (!node.left && !node.right) {
        return currentLevel
      }

      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }

    currentLevel++
  }

  return currentLevel
}

module.exports = minimumDepthOfBinaryTree
