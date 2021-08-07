const { LinkedListNode } = require("../../../utils")

/**
 * Reverses every kth sub-list in a linked list
 * @constructor
 * @param {LinkedListNode} head - linked list head
 * @param {number} k - sub list size to reverse
 */
const reverseEveryKthSubList = (head, k) => {
  let current = head
  let prevSubListTail = null

  while (current) {
    let i = 0
    let prev = null

    let sublistTail = current

    while (current && i <= k) {
      const next = current.next
      current.next = prev
      prev = current
      current = next

      i++
    }

    if (prevSubListTail) {
      prevSubListTail.next = prev
    } else {
      head = prev
    }

    prevSubListTail = sublistTail
  }

  return head
}

module.exports = reverseEveryKthSubList
