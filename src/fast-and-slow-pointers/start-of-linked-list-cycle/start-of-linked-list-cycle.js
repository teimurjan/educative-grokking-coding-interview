const { LinkedListNode } = require("../../utils")

/**
 * Returns the length of linked list cycle
 * @constructor
 * @param {LinkedListNode} meetNode - node where slow and fast meets
 */
const getCycleLength = (meetNode) => {
  let node = meetNode
  let length = 0

  while (true) {
    node = node.next
    length += 1
    if (node === meetNode) {
      break
    }
  }

  return length
}

/**
 * Returns the node starting the cycle in the linked list
 * @constructor
 * @param {LinkedListNode} head - linked list head
 */
const startOfLinkedListCycle = (head) => {
  let slow = head
  let fast = head
  let cycleLength = 0

  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next

    if (slow === fast) {
      cycleLength = getCycleLength(slow)
      break
    }
  }

  let pointer1 = head
  let pointer2 = head

  while (cycleLength > 0) {
    pointer2 = pointer2.next
    cycleLength--
  }

  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next
    pointer2 = pointer2.next
  }

  return pointer1.value
}

module.exports = startOfLinkedListCycle
