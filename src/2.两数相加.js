/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start

/**
 * Definition for singly-linked list.
 */
function ListNode (val) {
  this.val = val
  this.next = null
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const head = new ListNode(0)
  let current = head
  let carry = 0
  while (l1 || l2) {
    const x = l1 ? l1.val : 0
    const y = l2 ? l2.val : 0
    const sum = x + y + carry
    carry = Math.floor(sum / 10)

    current.next = new ListNode(sum % 10)
    current = current.next
    if (l1) {
      l1 = l1.next
    }
    if (l2) {
      l2 = l2.next
    }
  }

  if (carry > 0) {
    current.next = new ListNode(Math.floor(carry))
  }

  return head.next
}
// @lc code=end

module.exports = { ListNode, addTwoNumbers }
