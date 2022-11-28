import Highlight from '../../components/highlight';
export default function ClimbStairs() {

  const code = `
  var climbStairs = function(n) {
      if (n < 0) {
        throw Error('输出的参数超出范围')
      }
      if(n <= 2){
          return n;
      }
      let p = 1;
      let q = 1;
      let r = 2;
      for(i = 3; i <= n+1; i++){
          p = q;
          q = r;
          r = p + q;
          // console.info(' p q,r', p, q, r, ' i:', i, ' n:', n);
      }
      return r;
  };

  climbStairs(3) // 5
  climbStairs(4) // 8
  climbStairs(5) // 13
  
  `

  return (
    <>
      <a href='https://leetcode.cn/problems/climbing-stairs/solutions/286022/pa-lou-ti-by-leetcode-solution/'>详细解题网址</a>
      <hr />
      <h3>解题思路:动态规划(滚动数组)，或者转化为斐波那契数列</h3>
      <Highlight className="code">
        {code}
      </Highlight>
    </>
  )
}



