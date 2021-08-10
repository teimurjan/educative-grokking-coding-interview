const { BinaryTreeNode } = require("../../../utils")

/**
 * Returns true if there is a root-to-leaf path with a given sum
 * @constructor
 * @param {BinaryTreeNode} node - current node
 * @param {number} targetSum - target sum
 * @param {number} currentSum - current sum
 */
const binaryTreePathSumHelper = (node, targetSum, currentSum = 0) => {
  if (!node) {
    return false
  }

  const nextCurrentSum = node.value + currentSum
  if (nextCurrentSum === targetSum) {
    return true
  }

  if (nextCurrentSum > targetSum) {
    return false
  }

  return (
    binaryTreePathSumHelper(node.left, targetSum, nextCurrentSum) ||
    binaryTreePathSumHelper(node.right, targetSum, nextCurrentSum)
  )
}

/**
 * Returns true if there is a root-to-leaf path with a given sum
 * @constructor
 * @param {BinaryTreeNode} head - head of binary tree
 * @param {number} s - path sum
 */
const binaryTreePathSum = (head, s) => binaryTreePathSumHelper(head, s)

module.exports = binaryTreePathSum
