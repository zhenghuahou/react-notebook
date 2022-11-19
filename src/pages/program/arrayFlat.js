import Highlight from '../../components/highlight';
export default function ArrayFlat() {
  const code = `
    const arr = [1, 2, 3, [4, 5, 6, [11, 22, 33, [111, 222, 333]]], 5, "string", { name: "弹铁蛋同学" }];
    // concat + 递归
    function flat(arr) {
      let arrResult = [];
      arr.forEach(item => {
        if (Array.isArray(item)) {
            console.info(item,'--->',flat === arguments.callee)
          arrResult = arrResult.concat(arguments.callee(item));   // 递归
          // 或者用扩展运算符
          // arrResult.push(...arguments.callee(item));
        } else {
          arrResult.push(item);
        }
      });
      return arrResult;
    }
    flat(arr)
    // [1, 2, 3, 4, 5, 6, 11, 22, 33, 111, 222, 333, 5, 'string', { name: "弹铁蛋同学" }];
        `


  const code2 = `
  const arr = [1, 2, 3, [4, 5, 6, [11, 22, 33, [111, 222, 333]]], 5, "string", { name: "弹铁蛋同学" }];

  // 首先使用 reduce 展开一层
  arr.reduce((pre, cur) => pre.concat(cur), []);
  // [1, 2, 3, 4, 1, 2, 3, [1, 2, 3, [1, 2, 3]], 5, "string", { name: "弹铁蛋同学" }];
  
  // 用 reduce 展开一层 + 递归
  const flat = arr => {
    return arr.reduce((pre, cur) => {
      return pre.concat(Array.isArray(cur) ? flat(cur) : cur);
    }, []);
  };
  flat(arr)
  // [1, 2, 3, 4, 5, 6, 11, 22, 33, 111, 222, 333, 5, 'string', { name: "弹铁蛋同学" }];
  `

  const code3 = `
  // 栈思想
  function flat(arr) {
    const result = []; 
    const stack = [].concat(arr);  // 将数组元素拷贝至栈，直接赋值会改变原数组
    //如果栈不为空，则循环遍历
    while (stack.length !== 0) {
      const val = stack.pop(); 
      if (Array.isArray(val)) {
        stack.push(...val); //如果是数组再次入栈，并且展开了一层
      } else {
        result.unshift(val); //如果不是数组就将其取出来放入结果数组中
      }
    }
    return result;
  }
  const arr = [1, 2, 3, [4, 5, 6, [11, 22, 33, [111, 222, 333]]], 5, "string", { name: "弹铁蛋同学" }];
  flat(arr)
  // [1, 2, 3, 4, 5, 6, 11, 22, 33, 111, 222, 333, 5, 'string', { name: "弹铁蛋同学" }];
  `

  const code4 = `
  // reduce + 递归
  function flat(arr, num = 1) {
    return num > 0
      ? arr.reduce(
          (pre, cur) =>
            pre.concat(Array.isArray(cur) ? flat(cur, num - 1) : cur),
          []
        )
      : arr.slice();
  }
  const arr = [1, 2, 3, [4, 5, 6, [11, 22, 33, [111, 222, 333]]], 5, "string", { name: "弹铁蛋同学" }];
  flat(arr, Infinity);
  // [1, 2, 3, 4, 5, 6, 11, 22, 33, 111, 222, 333, 5, 'string', { name: "弹铁蛋同学" }];
  `

  const code5 = `
  Array.prototype.fakeFlat = function(num = 1) {
    if (!Number(num) || Number(num) < 0) {
      return this;
    }
    let arr = this.concat();    // 获得调用 fakeFlat 函数的数组
    while (num > 0) {           
      if (arr.some(x => Array.isArray(x))) {
        arr = [].concat.apply([], arr);    // 数组中还有数组元素的话并且 num > 0，继续展开一层数组 
      } else {
        break; // 数组中没有数组元素并且不管 num 是否依旧大于 0，停止循环。
      }
      num--;
    }
    return arr;
  };
  const arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]
  arr.fakeFlat(Infinity)
  // [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "弹铁蛋同学" }];
  `

  const code6 = `
    // reduce + 递归
    Array.prototype.fakeFlat = function(num = 1) {
      if (!Number(num) || Number(num) < 0) {
        return this;
      }
      let arr = [].concat(this);
      return num > 0
        ? arr.reduce(
            (pre, cur) =>
              pre.concat(Array.isArray(cur) ? cur.fakeFlat(--num) : cur),
            []
          )
        : arr.slice();
    };
    const arr = [1, [3, 4], , ,];
    arr.fakeFlat()
    // [1, 3, 4]

    // foEach + 递归
    Array.prototype.fakeFlat = function(num = 1) {
      if (!Number(num) || Number(num) < 0) {
        return this;
      }
      let arr = [];
      this.forEach(item => {
        if (Array.isArray(item)) {
          arr = arr.concat(item.fakeFlat(--num));
        } else {
          arr.push(item);
        }
      });
      return arr;
    };
    const arr = [1, [3, 4], , ,];
    arr.fakeFlat()
    // [1, 3, 4]
  `
  return (
    <>
      <a href='https://segmentfault.com/a/1190000021366004'>原文</a>
      <p>
        数组扁平化的几种实现方式
      </p>
      <h3>concat + 递归</h3>
      <Highlight className="code">
        {code}
      </Highlight>
      <h3>用 reduce 实现 flat 函数</h3>
      <Highlight className="code">
        {code2}
      </Highlight>
      <h3>使用栈的思想实现 flat 函数</h3>
      <Highlight>
        {code3}
      </Highlight>
      <h3>通过传入整数参数控制“拉平”层数</h3>
      <Highlight>
        {code4}
      </Highlight>
      <h3>实现在原型链上重写 flat 函数</h3>
      <Highlight>
        {code5}
      </Highlight>
      <h3>考虑数组空位的情况</h3>
      <Highlight>
        {code6}
      </Highlight>
    </>
  )
}