import Highlight from '../../components/highlight';

export default function NewInstanceOf() {
  const code = `
    // 模拟实现instanceOf
    function new_instance_of(leftVaule, rightVaule) { 
      let rightProto = rightVaule.prototype; // 取右表达式的 prototype 值
      leftVaule = leftVaule.__proto__; // 取左表达式的__proto__值
      while (true) {
        if (leftVaule === null) {
              return false;	
          }
          if (leftVaule === rightProto) {
              return true;	
          } 
          leftVaule = leftVaule.__proto__ 
      }
    }
  `;
  return <>
   <a href='https://juejin.cn/post/6844903613584654344'>详细解题网址1</a><br/>
   <a href='https://www.shouce.ren/api/view/a/15185'>详细解题网址2</a><br/>
   <img alt='' src='https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/5/28/163a55d5d35b866d~tplv-t2oaga2asx-zoom-in-crop-mark:4536:0:0:0.awebp'/>
    <Highlight className="code">
      {code}
    </Highlight>
  </>
}