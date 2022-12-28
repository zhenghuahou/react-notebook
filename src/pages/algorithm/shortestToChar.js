import Highlight from '../../components/highlight';
export default function ArrayFlat() {

  const code = `
  /**
   * @param {string} s
   * @param {character} c
   * @return {number[]}
   */
  var shortestToChar = function(s, c) {
    const length = s.length;
    let result = Array(length).fill(0);
    for (let i = 0; i < length; i++) {
      if (s[i] === c) {
        continue;
      }
      let leftStr = i > 0 ? s.slice(0, i) : '';
      let rightStr = i < length - 1 ? s.slice(i + 1) : '';
      let leftDistance = length, rightDistance = length;

      let indexOfLeft = leftStr.lastIndexOf(c);
      let indexOfRight = rightStr.indexOf(c);

      if (leftStr && indexOfLeft > -1) {
        leftDistance = Math.abs(i - indexOfLeft);
      }

      if (rightStr && indexOfRight > -1) {
        // rightDistance = Math.abs(i - (i + 1+indexOfRight));
        rightDistance = Math.abs(1 + indexOfRight);
      }

      result[i] = leftDistance > rightDistance ? rightDistance : leftDistance;
    }

    return result;
  };
  `
  return (
    <>
      <a href='https://leetcode.cn/problems/sqrtx/solutions/238553/x-de-ping-fang-gen-by-leetcode-solution/'>详细解题网址</a>
      <hr />
      <h3>字符的最短距离</h3>
      <Highlight className="code">
        {code}
      </Highlight>
    </>
  )
}


/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  const length = s.length;
  let result = Array(length).fill(0);
  for (let i = 0; i < length; i++) {
    if (s[i] === c) {
      continue;
    }
    let leftStr = i > 0 ? s.slice(0, i) : '';
    let rightStr = i < length - 1 ? s.slice(i + 1) : '';
    let leftDistance = length, rightDistance = length;

    let indexOfLeft = leftStr.lastIndexOf(c);
    let indexOfRight = rightStr.indexOf(c);

    if (leftStr && indexOfLeft > -1) {
      leftDistance = Math.abs(i - indexOfLeft);
    }

    if (rightStr && indexOfRight > -1) {
      // rightDistance = Math.abs(i - (i + 1+indexOfRight));
      rightDistance = Math.abs(1 + indexOfRight);
    }

    result[i] = leftDistance > rightDistance ? rightDistance : leftDistance;
  }

  return result;
};

shortestToChar('shortestToChar', 'e')


// function shortestToChar(s,c){
//   let result = Array(s.length).fill(0)
//   let indexed = [];
//   // 找出所有c的下标存放在数组indexed中
//   for(let i=0;i<s.length;i++){
//     if(s[i] === c){
//       indexed.push(i)
//     }
//   }

//     console.info(' indexed:',indexed)
//   // 根据indexed数组的下标值计算最短距离
//   for(let j=0;j<s.length;j++){
//       console.info(' s[j]:',s[j])
//     if(s[j] === c){
//      continue;
//     }
//     let finded = indexed.map(item=>Math.abs(item-j));
//           console.info(' finded:',finded)
//     result[j] = Math.min.apply(null,finded)
//   }
//   return result
// }

// shortestToChar('shortestToChar','e')