import Highlight from '../../components/highlight';
export default function ArrayFlat() {

  const code = `
  function fib(n) {
    if (n < 0) {
      throw Error('输出的参数超出范围')
    }
    if (n <= 1) {
      return n;
    }
    let p = 0;
    let q = 0;
    let r = 1;
    // 0 1 1 2 3 5 8 13
    for (i = 2; i <= n; i++) {
      p = q;
      q = r;
      r = p + q;
      // console.info('i=', i, 'p, q, r', p, q, r)
    }
  
    return r;
  }
  
  `

  return (
    <>
      <a href='https://leetcode.cn/problems/fibonacci-number/solutions/545049/fei-bo-na-qi-shu-by-leetcode-solution-o4ze/'>参考网址</a>
      <hr />
      <h3>解题思路:动态规划</h3>
      <img src="https://assets.leetcode-cn.com/solution-static/509/509_fig1.gif" alt="fig1"></img>
      <Highlight className="code">
        {code}
      </Highlight>
    </>
  )
}



