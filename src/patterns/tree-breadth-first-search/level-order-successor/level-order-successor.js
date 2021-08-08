const { BinaryTreeNode, Queue } = require("../../../utils")

/**
 * Returns level order successor of the given node value
 * @constructor
 * @param {BinaryTreeNode} head - head of binary tree
 * @param {BinaryTreeNode} key - give node value
 */
const levelOrderSuccessor = (head, key) => {
  const queue = new Queue()
  queue.push(head)

  while (queue.length > 0) {
    const node = queue.pop()

    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }

    if (node.value === key) {
      return queue.length > 0 ? queue.pop().value : null
    }
  }

  return null
}

module.exports = levelOrderSuccessor
