import Highlight from '../../components/highlight';
export default function HasCycle() {

  const code = `
  /**
   * Definition for singly-linked list.
   * function ListNode(val) {
   *     this.val = val;
   *     this.next = null;
   * }
   */

  /**
   * @param {ListNode} head
   * @return {boolean}
   */
  var hasCycle = function(head) {
      if( head == null  ){
        return false
      }

      let slow = head;
      let fast = head.next;
      
      while(fast !== slow){
        if( fast == null || fast.next == null ){
          return false
        }
        fast = fast.next.next;
        slow = slow.next;
      }
      return true;
  };
  `
  return (
    <>
      <a href='https://leetcode.cn/problems/linked-list-cycle/solutions/440042/huan-xing-lian-biao-by-leetcode-solution/'>详细解题网址</a>
      <hr />
      <h3>Floyd判圈算法:</h3>
      <p>
        Floyd判圈算法(Floyd Cycle Detection Algorithm)，又称龟兔赛跑算法(Tortoise and Hare Algorithm)，是一个可以在有限状态机、迭代函数或者链表上判断是否存在环，求出该环的起点与长度的算法。<br />

        如果有限状态机、迭代函数或者链表上存在环，那么在某个环上以不同速度前进的2个指针必定会在某个时刻相遇。同时显然地，如果从同一个起点(即使这个起点不在某个环上)同时开始以不同速度前进的2个指针最终相遇，那么可以判定存在一个环，且可以求出2者相遇处所在的环的起点与长度。
      </p>
      <h3>算法描述：</h3>
      <p>
        如果有限状态机、迭代函数或者链表存在环，那么一定存在一个起点可以到达某个环的某处(这个起点也可以在某个环上)。<br />

        初始状态下，假设已知某个起点节点为节点S。现设两个指针t和h，将它们均指向S。<br />

        接着，同时让t和h往前推进，但是二者的速度不同：t每前进1步，h前进2步。只要二者都可以前进而且没有相遇，就如此保持二者的推进。当h无法前进，即到达某个没有后继的节点时，就可以确定从S出发不会遇到环。反之当t与h再次相遇时，就可以确定从S出发一定会进入某个环，设其为环C。
      </p>
      <p>时间复杂度：O(N); 空间复杂度：O(1)</p>
      <Highlight className="code">
        {code}
      </Highlight>
    </>
  )
}


