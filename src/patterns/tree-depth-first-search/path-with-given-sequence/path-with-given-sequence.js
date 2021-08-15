const { BinaryTreeNode } = require("../../../utils")

/**
 * Returns true if the given sequence is matches any root-to-leaf path, otherwise false
 * @constructor
 * @param {BinaryTreeNode} head - head of binary tree
 * @param {Array.<number>} sequence - sequence
 * @param {number} index - current sequence index
 */
const pathWithGivenSequence = (head, sequence, index = 0) => {
  if (!head) {
    return false
  }

  if (head.value !== sequence[index]) {
    return false
  }

  if (!head.left && !head.right) {
    return sequence.length - 1 === index
  }

  return (
    pathWithGivenSequence(head.left, sequence, index + 1) ||
    pathWithGivenSequence(head.right, sequence, index + 1)
  )
}

module.exports = pathWithGivenSequence
