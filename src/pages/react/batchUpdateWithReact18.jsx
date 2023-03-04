import { useState, useLayoutEffect } from "react";
import * as ReactDOM from "react-dom";
import { flushSync } from "react-dom";

// https://juejin.cn/post/7153814771937067044
function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  function handleClick() {
    console.log("=== click ===");
    //react18 createRoot情况下，更新1次
    //react18 ReactDOM.render情况下，更新2次
    // fetchSomething().then(() => {
    //   // React 18 with createRoot batches these:
    //   setCount((c) => c + 1); // Does not re-render yet
    //   setFlag((f) => !f); // Does not re-render yet
    //   // React will only re-render once at the end (that's batching!)
    // });

    //react18  createRoot情况下，更新1次
    //react18  ReactDOM.render情况下，更新2次
    // setTimeout(() => {
    //   setCount((c) => c + 1);
    //   setFlag((f) => !f);
    // });

    //react18  createRoot情况下，更新2次
    //react18  ReactDOM.render情况下，更新2次
    flushSync(() => {
      setCount((c) => c + 1);
    });
    flushSync(() => {
      setFlag((f) => !f);
    });
  }

  return (
    <div>
      <button onClick={handleClick}>@Next</button>
      <h1 style={{ color: flag ? "blue" : "black" }}>{count}</h1>
      <LogEvents />
    </div>
  );
}

function LogEvents(props) {
  useLayoutEffect(() => {
    console.log("Commit！");
  });
  console.log("Render！");
  return null;
}

function fetchSomething() {
  return new Promise((resolve) => setTimeout(resolve, 100));
}

const rootElement = document.getElementById("root");
// This opts into the new behavior!
// ReactDOM.createRoot(rootElement).render(<App />);
// ReactDOM.render(<App />, rootElement);
ReactDOM.createRoot(rootElement).render(<App />);
