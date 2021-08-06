const { LinkedListNode } = require("../../../utils")

const getHead = () => {
  const head = new LinkedListNode(1)
  ;[2, 3, 4, 5].reduce((acc, value) => {
    acc.next = new LinkedListNode(value)
    return acc.next
  }, head)

  return head
}

const getReversedHead = () => {
  const head = new LinkedListNode(1)
  ;[4, 3, 2, 5].reduce((acc, value) => {
    acc.next = new LinkedListNode(value)
    return acc.next
  }, head)

  return head
}

module.exports = [
  {
    input: [getHead(), 2, 4],
    name: "returns 1-2-3-4-5 when input is 1-4-3-2-5",
    output: getReversedHead(),
  },
]
