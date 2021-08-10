const { BinaryTreeSiblingNode } = require("../../../utils")

const getHead1 = () => {
  const head1 = new BinaryTreeSiblingNode(1)
  head1.left = new BinaryTreeSiblingNode(2)
  head1.left.left = new BinaryTreeSiblingNode(4)
  head1.left.right = new BinaryTreeSiblingNode(5)
  head1.right = new BinaryTreeSiblingNode(3)
  head1.right.left = new BinaryTreeSiblingNode(6)
  head1.right.right = new BinaryTreeSiblingNode(7)

  return head1
}

const outputHead1 = getHead1()
outputHead1.next = outputHead1.left
outputHead1.right.next = outputHead1.left.left
outputHead1.left.next = outputHead1.right
outputHead1.left.left.next = outputHead1.left.right
outputHead1.left.right.next = outputHead1.right.left
outputHead1.right.left.next = outputHead1.right.right

const getHead2 = () => {
  const head2 = new BinaryTreeSiblingNode(12)
  head2.left = new BinaryTreeSiblingNode(7)
  head2.left.left = new BinaryTreeSiblingNode(9)
  head2.right = new BinaryTreeSiblingNode(1)
  head2.right.left = new BinaryTreeSiblingNode(10)
  head2.right.right = new BinaryTreeSiblingNode(5)

  return head2
}

const outputHead2 = getHead2()
outputHead2.next = outputHead2.left
outputHead2.right.next = outputHead2.left.left
outputHead2.left.next = outputHead2.right
outputHead2.left.left.next = outputHead2.right.left
outputHead2.right.left.next = outputHead2.right.right

module.exports = [
  {
    input: [getHead1()],
    output: outputHead1,
  },
  {
    input: [getHead2()],
    output: outputHead2,
  },
]
