const { LinkedListNode } = require("../../utils")

const getHead = (cycle = false) => {
  const head = new LinkedListNode(1)
  head.next = new LinkedListNode(2)
  head.next.next = new LinkedListNode(3)
  head.next.next.next = new LinkedListNode(4)
  head.next.next.next.next = new LinkedListNode(5)
  head.next.next.next.next.next = new LinkedListNode(6)

  if (cycle) {
    head.next.next.next.next.next = head.next.next
  }

  return head
}

module.exports = [
  {
    input: [getHead()],
    name: "returns false when input is 1-2-3-4-5-6",
    output: false,
  },
  {
    input: [getHead(true)],
    name: "returns true when input is 1-2-3-4-5-6-3-... (cycle)",
    output: true,
  },
]
