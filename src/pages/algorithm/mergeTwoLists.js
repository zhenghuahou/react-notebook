import Highlight from '../../components/highlight';
export default function LevelOrder() {

  const code = `
  var mergeTwoLists = function (l1, l2) {
    const prehead = new ListNode(-1);
    let prev = null;
    while (l1 !== null && l2 !== null) {
      if (l1.val <= l2.val) {
        prev.next = l1;
        l1 = l1.next;
      } else {
        prev.next = l2;
        l2 = l2.next;
      }
  
      prev = prev.next;
    }
  
    // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
    prev.next = l1 === null ? l2 : l1;
    return prehead.next;
  };
  `

  return (
    <>
      <a href='https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/solutions/1398788/he-bing-liang-ge-pai-xu-de-lian-biao-by-g3z6g/'>详细解题网址</a>
      <hr />
      <h3>合并两个排序的链表</h3>
      <Highlight className="code">
        {code}
      </Highlight>
    </>
  )
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*
输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
*/
function ListNode(val) {
  this.val = val;
  this.next = null;
}
var mergeTwoLists = function (l1, l2) {
  const prehead = new ListNode(-1);
  let prev = null;
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }

    prev = prev.next;
  }

  // 合并后 l1 和 l2 最多只有一个还未被合并完，我们直接将链表末尾指向未合并完的链表即可
  prev.next = l1 === null ? l2 : l1;
  return prehead.next;
};




