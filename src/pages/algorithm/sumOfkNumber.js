import Highlight from '../../components/highlight';
export default function SumOfkNumberDemo() {

  const code = `
  /*
    分析与解法:
    注意到取n，和不取n个区别即可，考虑是否取第n个数的策略，可以转化为一个只和前n-1个数相关的问题。

    如果取第n个数，那么问题就转化为“取前n-1个数使得它们的和为sum-n”，对应的代码语句就是sumOfkNumber(sum - n, n - 1)；
    如果不取第n个数，那么问题就转化为“取前n-1个数使得他们的和为sum”，对应的代码语句为sumOfkNumber(sum, n - 1)。
  */
  let spaceNum = 0;
  function repeatSpace() {
    spaceNum += 2;
    return ' '.repeat(spaceNum)
  }

  let resultArray = [];
  function SumOfkNumber(sum, n) {
    const spaceStr = repeatSpace();
    if (n < 0 || sum < 0) {
      return;
    }
    if (sum === 0) {
      console.info(spaceStr+':spaceNum:', spaceNum, resultArray, resultArray.join(' + '))
      return
    }

    // console.info(spaceStr+':>>sum', sum, 'n:', n);
    // 放n，n-1个数填满sum-n
    resultArray.push(n);
    SumOfkNumber(sum - n, n - 1);

    // console.info(spaceStr+':<<sum', sum, 'n:', n);
    // 不放n，n-1个数填满sum
    resultArray.pop();
    SumOfkNumber(sum, n - 1);
  }

  SumOfkNumber(10, 9)
  // 输出结果:
  /*
  9+1
  8+2
  7+3
  7+2+1
  6+4
  6+3+1
  5+4+1
  5+3+2
  4+3+2+1
  */
  `
  return (
    <>
      <a href='https://www.cnblogs.com/freewater/archive/2012/07/16/2593218.html'>详细解题网址1( 推荐 )</a><br/>
      <a href='https://wizardforcel.gitbooks.io/the-art-of-programming-by-july/content/02.03.html'>详细解题网址2</a>
      <hr />
      <Highlight className="code">
        {code}
      </Highlight>
    </>
  )
}


  let spaceNum = 0;
  function repeatSpace() {
    spaceNum += 1;
    return ' '.repeat(spaceNum)
  }

  let resultArray = [];

  function SumOfkNumber(sum, n) {
    const spaceStr = repeatSpace();

    if (n < 0 || sum < 0) {
      return;
    }

    if (sum === 0) {
      console.info(`%c resultArray:${resultArray.join(' + ')} `,'color:#f92672;background:#c1c1c1',' resultArray:',resultArray)
      return
    }

    console.info(`${spaceStr}:>>sum`, sum, 'n:', n);
    // 放n，n-1个数填满sum-n
    resultArray.push(n);
    SumOfkNumber(sum - n, n - 1);

    console.info(`${spaceStr}:<<sum`, sum, 'n:', n);
    // 不放n，n-1个数填满sum
    resultArray.pop();
    SumOfkNumber(sum, n - 1);

  }

  SumOfkNumber(4, 3)

  // 输出结果:
  /*
  9+1
  8+2
  7+3
  7+2+1
  6+4
  6+3+1
  5+4+1
  5+3+2
  4+3+2+1
  */