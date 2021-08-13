const { BinaryTreeNode } = require("../../../utils")

/**
 * Populates paths with root-to-leaf paths with a given summ
 * @constructor
 * @param {BinaryTreeNode} head - head of binary tree
 * @param {number} s - path sum
 * @param {Array.<number>} prevPath - previous path
 * @param {Array.<Array.<number>>} paths - valid paths container
 */
const allPathsForASumHelper = (head, s, prevPath, paths) => {
  if (!head) {
    return
  }

  const currPath = prevPath.concat(head.value)
  if (head.value === s && !head.left && !head.right) {
    paths.push(currPath)
  }

  allPathsForASumHelper(head.left, s - head.value, currPath, paths)
  allPathsForASumHelper(head.right, s - head.value, currPath, paths)
}

/**
 * Returns list of root-to-leaf paths with a given sum
 * @constructor
 * @param {BinaryTreeNode} head - head of binary tree
 * @param {number} s - path sum
 */
const allPathsForASum = (head, s) => {
  const paths = []

  allPathsForASumHelper(head, s, [], paths)

  return paths
}

module.exports = allPathsForASum
