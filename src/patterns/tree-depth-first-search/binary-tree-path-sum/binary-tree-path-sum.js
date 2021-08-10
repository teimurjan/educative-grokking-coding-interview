const { BinaryTreeNode } = require("../../../utils")

/**
 * Returns true if there is a root-to-leaf path with a given sum
 * @constructor
 * @param {BinaryTreeNode} head - head of binary tree
 * @param {number} s - path sum
 */
const binaryTreePathSum = (head, s) => {
  if (!head) {
    return false
  }

  if (head.value === s && !head.left && !head.right) {
    return true
  }

  return (
    binaryTreePathSum(head.left, s - head.value) ||
    binaryTreePathSum(head.right, s - head.value)
  )
}

module.exports = binaryTreePathSum
