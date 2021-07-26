const { LinkedListNode } = require("../../utils")

/**
 * Reverses a linked list and returns its head
 * @constructor
 * @param {LinkedListNode} head - linked list head
 */
const reverseLinkedList = (head) => {
  let prev = null
  let current = head

  while (current) {
    const temp = current.next
    current.next = prev
    prev = current
    current = temp
  }

  return prev
}

/**
 * Returns the mid node of a linked list
 * @constructor
 * @param {LinkedListNode} head - linked list head
 */
const getMidNode = (head) => {
  let slow = head
  let fast = head

  while (fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
  }

  return slow
}

/**
 * Returns true if the linked list is a palindrome
 * @constructor
 * @param {LinkedListNode} head - linked list head
 */
const palindromeLinkedList = (head) => {
  const splitNode = getMidNode(head)

  let reverseHead = reverseLinkedList(splitNode)
  const reverseHeadCopy = reverseHead

  while (head && reverseHead) {
    if (head.value !== reverseHead.value) {
      break
    }

    head = head.next
    reverseHead = reverseHead.next
  }

  reverseLinkedList(reverseHeadCopy)

  return !(head && reverseHead)
}

module.exports = palindromeLinkedList
