import { useLayoutEffect ,useState,memo} from "react";

/**
 * cDM 与 useLayoutEffect 执行时机相同
 */

function ChildFunction() {
  console.info('render child component')
  // useLayoutEffect(() => {
  //   console.log(
  //     "exec ChildFunction's useLayoutEffect",
  //     performance.now().toFixed(2)
  //   );

  //   // 这时 ParentFunction 的 useLayoutEffect 回调还没执行
  //   // 但可获取到父组件熏染的 DOM 节点
  //   const parentDom = document.querySelector(".parentClass");
  //   if (parentDom) {
  //     console.log(
  //       "parentClass 节点内容：",
  //       performance.now().toFixed(2),
  //       parentDom.textContent
  //     );
  //   }
  // });

  return <div>ChildFunction 组件</div>;
}

const ChildF = memo(ChildFunction)

function ParentFunction() {
  let [count,setCount] = useState(0)
  // useLayoutEffect(() => {
  //   console.log(
  //     "exec ParentFunction's useLayoutEffect",
  //     performance.now().toFixed(2)
  //   );
  // });
  return (
    <div>
      <div className="parentClass">count:{count}</div>
      <button onClick={()=>{
        setCount(count++)
      }}>increase count</button>
      {/* <ChildFunction /> */}
      memo:
      <ChildF onClick={()=>{}} />
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <ParentFunction />
    </div>
  );
}
