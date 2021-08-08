const { BinaryTreeNode } = require("../../../utils")

const head1 = new BinaryTreeNode(1)
head1.left = new BinaryTreeNode(2)
head1.left.left = new BinaryTreeNode(4)
head1.left.right = new BinaryTreeNode(5)
head1.right = new BinaryTreeNode(3)

const head2 = new BinaryTreeNode(12)
head2.left = new BinaryTreeNode(7)
head2.left.left = new BinaryTreeNode(9)
head2.right = new BinaryTreeNode(1)
head2.right.left = new BinaryTreeNode(10)
head2.right.right = new BinaryTreeNode(5)

module.exports = [
  {
    input: [head1, 3],
    output: 4,
  },
  {
    input: [head2, 9],
    output: 10,
  },
  {
    input: [head2, 12],
    output: 7,
  },
]
