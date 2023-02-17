import Highlight from '../../components/highlight';
export default function LRUCache() {

  const code = `
  var isValidSudoku = function (board) {
    //创建二维数组 rows\textit{rows}rows 和 columns\textit{columns}columns 分别记录数独的每一行和每一列中的每个数字的出现次数
    const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
    const subboxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)))
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        let cur = board[i][j];
        if (cur !== '.') {
          //把数字转换为对应的下标，存储改数字出现的次数
          rows[i][cur-1]++;
          columns[j][cur-1]++;
  
          subboxes[Math.floor(i/3)][Math.floor(j/3)][cur-1]++;
          // ok
          // if(rows[i][cur-1]+ columns[j][cur-1]+subboxes[Math.floor(i/3)][Math.floor(j/3)][cur-1]>3){
          //   return false;
          // }
  
          if(rows[i][cur-1]>1 || columns[j][cur-1]>1 || subboxes[Math.floor(i/3)][Math.floor(j/3)][cur-1]>1){
            return false;
          }
        }
      }
  
    }
  
    return true;
  }
  `

  return (
    <>
      <a href='https://leetcode.cn/problems/valid-sudoku/solutions/1001859/you-xiao-de-shu-du-by-leetcode-solution-50m6/'>详细解题网址</a>
      <hr />
      <h3>有效的数独</h3>
      <Highlight className="code">
        {code}
      </Highlight>
    </>
  )
}
