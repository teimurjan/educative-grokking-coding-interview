const { BinaryTreeNode, Queue } = require("../../../utils")

/**
 * Returns 2d array with tree levels
 * @constructor
 * @param {BinaryTreeNode} head - head of binary tree
 */
const zigzagTraversal = (head) => {
  const result = []
  const queue = new Queue()
  queue.push(head)

  let reverse = false
  while (queue.length > 0) {
    const levelSize = queue.length

    const level = []
    for (let i = 0; i < levelSize; i++) {
      const node = queue.pop()
      if (reverse) {
        level.unshift(node.value)
      } else {
        level.push(node.value)
      }

      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
    }

    reverse = !reverse
    result.push(level)
  }

  return result
}

module.exports = zigzagTraversal
