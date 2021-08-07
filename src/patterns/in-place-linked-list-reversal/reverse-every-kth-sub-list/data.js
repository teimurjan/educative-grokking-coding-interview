const { LinkedListNode } = require("../../../utils")

const getHead = () => {
  const head = new LinkedListNode(1)
  ;[2, 3, 4, 5, 6, 7, 8].reduce((acc, value) => {
    acc.next = new LinkedListNode(value)
    return acc.next
  }, head)

  return head
}

const getReversedHead = () => {
  const head = new LinkedListNode(3)
  ;[2, 1, 6, 5, 4, 8, 7].reduce((acc, value) => {
    acc.next = new LinkedListNode(value)
    return acc.next
  }, head)

  return head
}

module.exports = [
  {
    input: [getHead(), 2, 4],
    name: "returns 1-2-3-4-5-6-7-8 when input is 3-2-1-6-5-4-8-7",
    output: getReversedHead(),
  },
]
