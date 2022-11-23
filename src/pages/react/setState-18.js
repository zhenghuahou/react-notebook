import { useState, useLayoutEffect } from "react";
import * as ReactDOM from "react-dom";


function getDefaultNumbers() {
  console.info(" getDefaultNumbers test");
  return 11
}

const delay = 2000;
//react17 demo:https://codesandbox.io/s/hungry-drake-p5p35r?file=/src/index.js:470-480
export default function App() {
  const [test, setTest] = useState(()=>{
    console.info('getDefaultNumbers方法只在初始化的时候执行一次')
    return getDefaultNumbers()
  });
  const [count, setCount] = useState(0);
  // const [flag, setFlag] = useState(false);

  function handleClick() {
    console.log("=== click ===");
    setCount((c) => c + 1); // Does not re-render yet
    // setFlag((f) => !f); // Does not re-render yet
    // React will only re-render once at the end (that's batching!)
  }

  const handleClickAsync = () => {
  
    setTimeout(handleClick,delay);
  };

  return (
    <div>
      <button onClick={handleClick}>Next</button><br/>
      <button onClick={handleClickAsync}>Next async {delay}ms后执行事件回调</button>
      {/* <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1> */}
      <LogEvents />
    </div>
  );
}

function LogEvents(props) {
  //点击Next按钮时:react 17中渲染1次，react18中只渲染1次
  //点击Next async按钮时:react 17中渲染2次，react18中只渲染1次
  useLayoutEffect(() => {
    console.log("Commit", performance.now().toFixed(2));
  });
  console.log("Render", performance.now().toFixed(2));
  return null;
}
