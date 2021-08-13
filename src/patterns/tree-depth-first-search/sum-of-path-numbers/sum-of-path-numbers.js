const { BinaryTreeNode } = require("../../../utils")

/**
 * Populates paths with root-to-leaf paths with a given summ
 * @constructor
 * @param {BinaryTreeNode} head - head of binary tree
 * @param {string} prevNumStr - previous number str
 */
const sumOfPathNumbersHelper = (head, prevNumStr = '') => {
  if (!head) {
    return 0
  }

  const currNumStr = `${prevNumStr}${head.value}`
  if (!head.left && !head.right) {
    return parseInt(currNumStr, 10)
  }

  return (
    sumOfPathNumbersHelper(head.left, currNumStr) +
    sumOfPathNumbersHelper(head.right, currNumStr)
  )
}

/**
 * Returns the total sum of all the numbers represented by all paths
 * @constructor
 * @param {BinaryTreeNode} head - head of binary tree
 */
const sumOfPathNumbers = (head) => {
  return sumOfPathNumbersHelper(head)
}

module.exports = sumOfPathNumbers
