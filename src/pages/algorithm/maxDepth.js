import Highlight from '../../components/highlight';
export default function MaxDepth() {

  const code = `
  function maxDepthNode(node) {
    if(node === null){
     return 0
    }
   return Math.max(maxDepthNode(node.left),maxDepthNode(node.right)) +1
  }
  
  var maxDepth = function (root) {
    return maxDepthNode(root)
  };
  `

  return (
    <>
      <a href='https://leetcode.cn/problems/maximum-depth-of-binary-tree/solutions/349250/er-cha-shu-de-zui-da-shen-du-by-leetcode-solution/'>详细解题网址</a><br />
      <hr />
      <Highlight className="code">
        {code}
      </Highlight>
    </>
  )
}



