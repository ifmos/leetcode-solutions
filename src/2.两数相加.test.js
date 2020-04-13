const { ListNode, addTwoNumbers } = require('./2.两数相加')

/**
 * @param  {...Number} vals
 * @return listNode {ListNode}
 */
function createListNode (...vals) {
  if (!vals.length) return null
  const head = new ListNode(0)
  let index = 0
  let current = head
  while (index < vals.length) {
    current.next = new ListNode(vals[index++])
    current = current.next
  }
  return head.next
}
/**
 * @param listNode {ListNode}
 * @return str {String}
 */
function listNodeToReverseString (listNode) {
  let str = ''
  while (listNode) {
    str += listNode.val
    listNode = listNode.next
  }
  return str.split('').reverse().join('')
}
describe('2.两数相加', function () {
  it('test1', function () {
    const l1 = createListNode(2, 4, 3)
    const l2 = createListNode(5, 6, 4)
    expect(listNodeToReverseString(addTwoNumbers(l1, l2))).toEqual('807')
  })
  it('test2', function () {
    const l1 = createListNode(5)
    const l2 = createListNode(5)
    expect(listNodeToReverseString(addTwoNumbers(l1, l2))).toEqual('10')
  })
})
