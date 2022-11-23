import Highlight from '../../components/highlight';
export default function ArrayFlat() {

  const code = `
  var reverseString = function (s) {
    const len = s.length;
    var mid = Math.ceil(len / 2);
    for (i = 0; i < mid; i++) {
      const temp = s[i];
      const j = len - i - 1;
      s[i] = s[j];
      s[j] = temp;
    }
  };
  `

  const code2 = `
  var reverseString = function (s) {
    const n = s.length;
    for (let left = 0, right = n - 1; left < right; ++left, --right) {
      [s[left], s[right]] = [s[right], s[left]];
    }
  };
  `
  return (
    <>
      <a href='https://leetcode.cn/problems/reverse-string/solutions/439034/fan-zhuan-zi-fu-chuan-by-leetcode-solution/'>详细解题网址</a>
      <hr />
      <p>实现一</p>
      <Highlight className="code">
        {code}
      </Highlight>
      <p>实现一</p>
      <Highlight className="code">
        {code2}
      </Highlight>
    </>
  )
}



