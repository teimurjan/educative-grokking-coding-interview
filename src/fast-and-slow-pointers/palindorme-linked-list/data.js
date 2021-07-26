const { LinkedListNode } = require("../../utils")

const getPalindromeHead = (size) => {
  const head = new LinkedListNode(1)

  const midNode = new Array((size - 1) / 2).fill().reduce((acc) => {
    acc.next = new LinkedListNode(acc.value + 1)
    return acc.next
  }, head)

  new Array((size - 1) / 2).fill().reduce((acc) => {
    acc.next = new LinkedListNode(acc.value - 1)
    return acc.next
  }, midNode)

  return head
}

const getHead = (size) => {
  const head = new LinkedListNode(1)

  new Array(size - 1).fill().reduce((acc) => {
    acc.next = new LinkedListNode(acc.value + 1)
    return acc.next
  }, head)

  return head
}

module.exports = [
  {
    input: [getHead(5)],
    name: "returns true when input is 1-2-3-4-5",
    output: false,
  },
  {
    input: [getPalindromeHead(5)],
    name: "returns true when input is 1-2-3-2-1",
    output: true,
  },
  {
    input: [getHead(9)],
    name: "returns false when input is 1-2-3-4-5-6-7-8-9",
    output: false,
  },
]
