import Highlight from '../../components/highlight';
export default function GetSmallestString() {

  const code = `
  var letters = [...Array(26)].map((q,i)=>String.fromCharCode(i+97)).join('')
	var getSmallestString = function (n, k) {
		var result = Array(n).fill('a')
		var distance = k;
		for (var i = 1; i <= n; i++) {
			let gap = k - (n - i) - (i - 1) * 26;
			if (gap >= 26) {
				result[n - i] = 'z' 
			} else {
				result[n - i] = letters[gap - 1] 
				return result.join('');
			}

		}
		return result.join('');
	};
  `

  return (
    <>
      <a href='https://leetcode.cn/problems/smallest-string-with-a-given-numeric-value/solutions/1732611/xun-huan-by-kcx2366425574-prge/'>详细解题网址</a>
      <hr />
      <p>实现一</p>
      <Highlight className="code">
        {code}
      </Highlight>
    </>
  )
}



