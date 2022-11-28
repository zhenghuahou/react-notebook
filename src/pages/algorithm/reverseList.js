import Highlight from '../../components/highlight';
export default function ReverseList() {

  const code = `
  var reverseList = function(head) {
    let prev = null;
    let curNode = head;
    let temp;
  
    while(curNode){
      temp = curNode.next;
      curNode.next = prev;
      prev = curNode;
      curNode = temp;
    }
  
    return prev;
  };
  `

  const code2 = `
  var reverseList = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    const newHead = reverseList(head.next);
    // console.info(' newHead:',newHead,' head:',head)
    head.next.next = head;
    head.next = null;
    return newHead;
  };
  
  `
  return (
    <>
      <a href='https://leetcode.cn/problems/reverse-linked-list/solutions/551596/fan-zhuan-lian-biao-by-leetcode-solution-d1k2/'>详细解题网址1</a><br />
      <a href='https://zhuanlan.zhihu.com/p/266666572?utm_id=0'>详细解题网址2</a>
      <hr />
      <h3>反转链表</h3>
      <p>实现一:迭代</p>
      <Highlight className="code">
        {code}
      </Highlight>
      <p>实现一:递归</p>
      <Highlight className="code">
        {code2}
      </Highlight>
    </>
  )
}



