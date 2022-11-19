import Highlight from '../../components/highlight';
export default function ArrayFlat() {

  const code = `
  function curry(fn){
    return function curriedFn(...args){
      // console.info(' args:',args, 'fn:',fn,' len:',fn.length);
      if(fn.length > args.length){
        return (...innerArg)=>{
          // console.info(' args:',args, 'fn:',fn,' len:',fn.length,'innerArg:',innerArg);
          return curriedFn(...args,...innerArg)
        }
      }
      return fn(...args)
    }
  }
  
  function add1(x, y, z) {
    return x + y + z;
  }
  const add = curry(add1);
  console.info(add(1, 2, 3));
  console.info(add(1)(2)(3));
  console.info(add(1, 2)(3));
  console.info(add(1)(2, 3));
  `

  return (
    <>
      <a href='https://juejin.cn/post/6844904093467541517'>参考网址1</a><br/>
      <a href='https://segmentfault.com/a/1190000017064541'>参考网址2</a><br/>
      <a href='https://juejin.cn/post/6889250555035090951'>参考网址3</a>
      <hr/>
      <h3>解题思路:</h3>
      <p>
      通过闭包的方式储存传入参数<br/>
      通过函数的length属性获得参数个数<br/>
      当参数个数不够时直接返回方法<br/>
      存储的参数个数等于原函数参数个数时执行原函数<br/>
      </p>
      
      <Highlight className="code">
        {code}
      </Highlight>
    </>
  )
}


