import { useState, useLayoutEffect } from "react";
import * as ReactDOM from "react-dom";
import { unstable_batchedUpdates, flushSync } from "react-dom";

// https://juejin.cn/post/7153814771937067044

function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    console.log("=== click ===");
    //React 17 render 1次
    setCount((c) => c + 1);
    setFlag((f) => !f);

    // fetchSomething().then(() => {
    //   // React 17 render 2次
    //   // React 17 and earlier does NOT batch these:
    //   setCount((c) => c + 1); // Causes a re-render
    //   setFlag((f) => !f); // Causes a re-render
    // });

    // setTimeout(()=>{
    //   // React 17 render 2次
    //   setCount((c) => c + 1); // Causes a re-render
    //   setFlag((f) => !f); // Causes a re-render
    // })

    //更新一次，批量更新
    // unstable_batchedUpdates(() => {
    //   setCount((c) => c + 1);
    //   setFlag((f) => !f);
    // });

    //更新2次
    // flushSync(() => {
    //   setCount((c) => c + 1);
    // });
    // flushSync(() => {
    //   setFlag((f) => !f);
    // });
  }

  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
      <LogEvents />
    </div>
  );
}

function LogEvents(props) {
  useLayoutEffect(() => {
    console.log("Commit");
  });
  console.log("Render");
  return null;
}

function fetchSomething() {
  return new Promise((resolve) => setTimeout(resolve, 100));
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
