const { LinkedListNode } = require("../../../utils")

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
    input: [getHead(6)],
    name: "returns 4 when input is 1-2-3-4-5-6",
    output: 4,
  },
  {
    input: [getHead(9)],
    name: "returns 5 when input is 1-2-3-4-5-6-7-8-9",
    output: 5,
  },
]
