import Highlight from "../../components/highlight";
export default function CheckValidString() {
  const code = `
    /** 贪心算法
     * @param {string} s
     * @return {boolean}
     */
    var checkValidString = function (s) {
      let minCount = 0;
      let maxCount = 0;
      const n = s.length;
      for (let i = 0; i < n; i++) {
        const c = s[i];
        if (c === '(') {
          minCount++;
          maxCount++;
        } else if (c === ')') {
          minCount = Math.max(minCount - 1, 0)
          maxCount--;
          if (maxCount < 0) {
            return false
          }
        } else {
          // * 
          minCount = Math.max(minCount - 1, 0)
          maxCount++;

        }
      }

      return minCount === 0
    };

    // 通过栈解决
    var checkValidString = function (s) {
      let leftStack = [];//存放'('
      let asteriskStack = [];//存放'*'
      for (let i = 0; i < s.length; i++) {
        let cur = s[i]
        if (cur === '(') {
          leftStack.push(i)
        } else if (cur === '*') {
          asteriskStack.push(i);
        } else if (cur === ')') {
          /*
          如果遇到右括号，则需要有一个左括号或星号和右括号匹配，由于星号也可以看成右括号或者空字符串，
          因此当前的右括号应优先和左括号匹配，没有左括号时和星号匹配
          */
          if (leftStack.length) {
            leftStack.pop();
          } else if (asteriskStack.length) {
            asteriskStack.pop();
          }
          return false
        }
      }

      while (leftStack.length && asteriskStack.length) {
        const leftIndex = leftStack.pop();
        const rightIndex = asteriskStack.pop();
        if (leftIndex > rightIndex) {
          return false;
        }
      }

      return leftStack.length === 0;
    };

    var s = "(((((()*)(*)*))())())(()())())))((**)))))(()())()"
    checkValidString(s)
  `;
  return (
    <>
      <a href="https://leetcode.cn/problems/valid-parenthesis-string/solutions/992347/you-xiao-de-gua-hao-zi-fu-chuan-by-leetc-osi3/">
        详细解题网址
      </a>
      <hr />
      <h3>判断括号字符串是否有效</h3>
      <Highlight className="code">{code}</Highlight>
    </>
  );
}

/** 贪心算法
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  let minCount = 0;
  let maxCount = 0;
  const n = s.length;
  for (let i = 0; i < n; i++) {
    const c = s[i];
    if (c === "(") {
      minCount++;
      maxCount++;
    } else if (c === ")") {
      minCount = Math.max(minCount - 1, 0);
      maxCount--;
      if (maxCount < 0) {
        return false;
      }
    } else {
      // *
      minCount = Math.max(minCount - 1, 0);
      maxCount++;
    }
  }

  return minCount === 0;
};

// 方法二: 通过栈解决
// var checkValidString = function (s) {
//   let leftStack = [];//存放'('
//   let asteriskStack = [];//存放'*'
//   for (let i = 0; i < s.length; i++) {
//     let cur = s[i]
//     if (cur === '(') {
//       leftStack.push(i)
//     } else if (cur === '*') {
//       asteriskStack.push(i);
//     } else if (cur === ')') {
//       /*
//       如果遇到右括号，则需要有一个左括号或星号和右括号匹配，由于星号也可以看成右括号或者空字符串，
//       因此当前的右括号应优先和左括号匹配，没有左括号时和星号匹配
//       */
//       if (leftStack.length) {
//         leftStack.pop();
//       } else if (asteriskStack.length) {
//         asteriskStack.pop();
//       }
//       return false
//     }
//   }

//   while (leftStack.length && asteriskStack.length) {
//     const leftIndex = leftStack.pop();
//     const rightIndex = asteriskStack.pop();
//     if (leftIndex > rightIndex) {
//       return false;
//     }
//   }

//   return leftStack.length === 0;
// };

// var s = "(((((()*)(*)*))())())(()())())))((**)))))(()())()"
// checkValidString(s)
