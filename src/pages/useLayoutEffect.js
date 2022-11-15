import { useLayoutEffect ,memo} from "react";

/**
 * componentDidMount 与 useLayoutEffect 执行时机相同
 */

function ChildFunction() {
  useLayoutEffect(() => {
    console.log(">>>[ChildFunction] exec ChildFunction's useLayoutEffect",performance.now().toFixed(2));

    // 这时 ParentFunction 的 useLayoutEffect 回调还没执行
    // 但可获取到父组件熏染的 DOM 节点
    const parentDom = document.querySelector(".parentClass");
    if (parentDom) {
      console.log(">>>[ChildFunction] parentClass 节点内容：");
    }
  });

  // console.info('[ChildFunction] render 2次 ')
  return <div>ChildFunction 组件</div>;
}

// const RR = memo(ChildFunction)

function ParentFunction() {
  
  return (
    <div>
      <div className="parentClass">我是 .parentClass 节点</div>
      <ChildFunction />
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



// >>>[ChildFunction] exec ChildFunction's useLayoutEffect 246.40
// >>>[ChildFunction] parentClass 节点内容： 我是 .parentClass 节点
// <<<<<<<<<[ParentFunction] exec ParentFunction's useLayoutEffect 246.60
// >>>[ChildFunction] exec ChildFunction's useLayoutEffect 252.60
// >>>[ChildFunction] parentClass 节点内容： 我是 .parentClass 节点
// <<<<<<<<<[ParentFunction] exec ParentFunction's useLayoutEffect 252.80