import Highlight from '../../components/highlight';
export default function ArrayFlat() {

  const code = `
  /**
   * Definition for a binary tree node.
   * function TreeNode(val, left, right) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.left = (left===undefined ? null : left)
   *     this.right = (right===undefined ? null : right)
   * }
   */
  /**
   * @param {TreeNode} root
   * @return {TreeNode}
   */
  
  /*
  
  输入：root = [2,1,3]
  输出：[2,3,1]
  */
  var invertTree = function (root) {
    if (!root) {
      return root
    }
  
    let temp =root.right;
   
    root.right = invertTree(root.left);
    root.left = invertTree(temp);
    return root;
  };
  `
  return (
    <>
      <a href='https://leetcode.cn/problems/invert-binary-tree/solutions/73159/dong-hua-yan-shi-liang-chong-shi-xian-226-fan-zhua/'>详细解题网址</a>
      <img alt='invertTree'
       src='https://pic.leetcode-cn.com/0f91f7cbf5740de86e881eb7427c6c3993f4eca3624ca275d71e21c5e3e2c550-226_2.gif'/>
      <hr />
      <h3>翻转二叉树</h3>
      <p>时间复杂度：O(N); 空间复杂度：O(N)</p>
      <Highlight className="code">
        {code}
      </Highlight>
    </>
  )
}



