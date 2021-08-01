const { LinkedListNode } = require("../../../utils")

const getHead = (cycleStartIndex) => {
  const head = new LinkedListNode(1)
  head.next = new LinkedListNode(2)
  head.next.next = new LinkedListNode(3)
  head.next.next.next = new LinkedListNode(4)
  head.next.next.next.next = new LinkedListNode(5)
  head.next.next.next.next.next = new LinkedListNode(6)

  head.next.next.next.next.next = new Array(cycleStartIndex)
    .fill()
    .reduce((acc) => acc.next, head)

  return head
}

module.exports = [
  {
    input: [getHead(2)],
    name: "returns undefined when input is 1-2-3-4-5-6-4-... (cycle)",
    output: 3,
  },
  {
    input: [getHead(3)],
    name: "returns 3 when input is 1-2-3-4-5-6-3-... (cycle)",
    output: 4,
  },
]
