import Highlight from '../../components/highlight';
export default function LevelOrder() {

  const code = `
  // 层序遍历
    var levelOrder = function (root) {
      let result = [];
      //队列是一种特殊的线性表，它只允许在表的前端进行删除操作，而在表的后端进行插入操作。
      //https://www.runoob.com/java/data-queue.html
      let queue = [];
      root && queue.push(root);
      while (queue.length > 0) {
        var n = queue.length; //每一层的结点数量
        let levelList = [];
        // 同一层的节点
        for (let i = 0; i < n; i++) {
          const node = queue.shift();
          levelList.push(node?.val)
          if (node?.left != null) {
            queue.push(node.left)
          }
          if (node?.right != null) {
            queue.push(node.right);
          }

        }
        result.push(levelList);
      }

      return result;
    };
  `

  return (
    <>
      <a href='https://leetcode.cn/problems/binary-tree-level-order-traversal/solutions/244853/bfs-de-shi-yong-chang-jing-zong-jie-ceng-xu-bian-l/'>详细解题网址</a>
      <hr />
      <h3>二叉树的层序遍历</h3>
      <Highlight className="code">
        {code}
      </Highlight>
    </>
  )
}


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
 * @return {number[][]}
 */



// 层序遍历
// var levelOrder0 = function (root) {
//   //队列是一种特殊的线性表，它只允许在表的前端进行删除操作，而在表的后端进行插入操作。

//   let queue = [];
//   queue.push(root);
//   while (queue.length > 0) {
//     console.info('--> queue:', queue, ' size:', queue.length)
//     const node = queue.shift();
//     console.info('--> node:', node)
//     if (node?.left) {
//       queue.push(node.left)
//     }
//     if (node?.right) {
//       queue.push(node.right);
//     }
//   }
// };


// 层序遍历
var levelOrder = function (root) {
  let result = [];
  //队列是一种特殊的线性表，它只允许在表的前端进行删除操作，而在表的后端进行插入操作。
  let queue = [];
  root && queue.push(root);
  while (queue.length > 0) {
    var n = queue.length;
    let levelList = [];
    console.info('while--> queue:', queue,'levelList:',levelList,'n:',n, ' size:', queue.length)
    // 同一层的节点
    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      levelList.push(node?.val)
      if (node?.left != null) {
        queue.push(node.left)
      }
      if (node?.right != null) {
        queue.push(node.right);
      }
      console.info('@@queue:',queue,'length:',queue.length,' n:',n,'--> node:', node,' levelList:',levelList)
    }
    result.push(levelList);
  }

  return result;
};

//root:[3,9,20,null,null,15,7]

// 标准输出
/*
while--> queue: [ [3,9,20,null,null,15,7] ] levelList: [] n: 1  size: 1
@@queue: [ [9], [20,15,7] ] length: 2  n: 1 --> node: [3,9,20,null,null,15,7]  levelList: [ 3 ]
while--> queue: [ [9], [20,15,7] ] levelList: [] n: 2  size: 2
@@queue: [ [20,15,7] ] length: 1  n: 2 --> node: [9]  levelList: [ 9 ]
@@queue: [ [15], [7] ] length: 2  n: 2 --> node: [20,15,7]  levelList: [ 9, 20 ]
while--> queue: [ [15], [7] ] levelList: [] n: 2  size: 2
@@queue: [ [7] ] length: 1  n: 2 --> node: [15]  levelList: [ 15 ]
@@queue: [] length: 0  n: 2 --> node: [7]  levelList: [ 15, 7 ]
*/