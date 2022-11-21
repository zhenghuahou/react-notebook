import Highlight from '../../components/highlight';
export default function ArrayFlat() {

  const code = `
  /**
   * @param {number} x
   * @return {number}
   */
  // 实现一
  var mySqrt = function(x) {
      let left = 0;
      let right = x
      let result = 0;
  
      while(left<=right){
          let mid = Math.ceil((left+right)/2);
          if(mid*mid <=x){
              result = mid;
              left = mid+1;
          }else{
              right = mid -1;
          }
      }
      return result
  };
  `


  const code2 = `
  /**
   * @param {number} x
   * @return {number}
   */
  // 实现二
  var mySqrt = function(x) {
    let mid = Math.ceil(x/2);
    let temp = mid;
    let right = mid;
    for(let i = 0; i <= right; ){
      temp =  Math.floor((i+mid)/2);
      // console.info('00 mid',mid,'temp:',temp,'right:',right,' i:',i);
      if(temp*temp>x){
        mid = temp;
        right = temp-1;
        if(right < i){
          // console.info('11 mid',mid,'temp:',temp,'right:',right,' i:',i);
          return right
        }
      }else{
        i= temp + 1;
        // console.info('22 mid',mid,'temp:',temp,'right:',right,' i:',i);
      }
    }
    return temp;
  };

  mySqrt(9) // 5
  `

  return (
    <>
      <a href='https://leetcode.cn/problems/sqrtx/solutions/238553/x-de-ping-fang-gen-by-leetcode-solution/'>详细解题网址</a>
      <hr />
      <h3>解题思路:二分查找</h3>
      <Highlight className="code">
        {code}
      </Highlight>
      <Highlight className="code">
        {code2}
      </Highlight>
    </>
  )
}



