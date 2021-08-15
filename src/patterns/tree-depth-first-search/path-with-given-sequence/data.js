const { BinaryTreeNode } = require("../../../utils")

const head1 = new BinaryTreeNode(1)
head1.left = new BinaryTreeNode(7)
head1.right = new BinaryTreeNode(9)
head1.right.left = new BinaryTreeNode(2)
head1.right.right = new BinaryTreeNode(9)

const head2 = new BinaryTreeNode(1)
head2.left = new BinaryTreeNode(0)
head2.left.left = new BinaryTreeNode(1)
head2.right = new BinaryTreeNode(1)
head2.right.left = new BinaryTreeNode(6)
head2.right.right = new BinaryTreeNode(5)

module.exports = [
  {
    input: [head1, [1, 9, 9]],
    output: true,
  },
  {
    input: [head2, [1, 0, 7]],
    output: false,
  },
  {
    input: [head2, [1, 1, 6]],
    output: true,
  },
]
