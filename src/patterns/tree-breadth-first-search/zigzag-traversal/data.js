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
head2.right.left.left = new BinaryTreeNode(20)
head2.right.left.right = new BinaryTreeNode(17)
head2.right.right = new BinaryTreeNode(5)

module.exports = [
  {
    input: [head1],
    output: [[1], [3, 2], [4, 5, 6, 7]],
  },
  {
    input: [head2],
    output: [[12], [1, 7], [9, 10, 5], [17, 20]],
  },
]
