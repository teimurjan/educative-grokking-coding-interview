const { LinkedListNode } = require("../../../utils")

const getHead = () => {
  const head = new LinkedListNode(2)
  ;[4, 6, 8, 10].reduce((acc, value) => {
    acc.next = new LinkedListNode(value)
    return acc.next
  }, head)

  return head
}

const getReversedHead = () => {
  const head = new LinkedListNode(10)
  ;[8, 6, 4, 2].reduce((acc, value) => {
    acc.next = new LinkedListNode(value)
    return acc.next
  }, head)

  return head
}

module.exports = [
  {
    input: [getHead()],
    name: "returns 10-8-6-4-2 when input is 2-4-6-8-10",
    output: getReversedHead(),
  },
]
