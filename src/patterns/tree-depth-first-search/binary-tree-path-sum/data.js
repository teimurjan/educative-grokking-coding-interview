const { BinaryTreeNode } = require("../../../utils")

const head1 = new BinaryTreeNode(1)
head1.left = new BinaryTreeNode(2)
head1.left.left = new BinaryTreeNode(4)
head1.left.right = new BinaryTreeNode(5)
head1.right = new BinaryTreeNode(3)
head1.right.left = new BinaryTreeNode(6)
head1.right.right = new BinaryTreeNode(7)

const head2 = new BinaryTreeNode(12)
head2.left = new BinaryTreeNode(7)
head2.left.left = new BinaryTreeNode(9)
head2.right = new BinaryTreeNode(1)
head2.right.left = new BinaryTreeNode(10)
head2.right.right = new BinaryTreeNode(5)

module.exports = [
  {
    input: [head1, 10],
    output: true,
  },
  {
    input: [head1, 5],
    output: false,
  },
  {
    input: [head2, 23],
    output: true,
  },
  {
    input: [head2, 16],
    output: false,
  },
]
