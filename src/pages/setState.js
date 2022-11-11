import { Component, useState } from "react";

export default function App() {
    return (
      <div className="app">
        <ClassComponent />
        <div style={{ marginTop: 20 }}></div>
        <FunctionComponent />
      </div>
    );
  }

  
class ClassComponent extends Component {
  state = {
    value: 0
  };

  // 该函数直接赋值给 onClick 回调，
  // 则属于 React 默认进行批处理更新的场景
  // 执行 setState 后不会更新 this.state 值，
  // 所以两次输出值相等
  handleClick = () => {
    console.log("==========开始执行 handleClick =========");
    console.log("执行前值为：", this.state.value);
    this.setState({ value: this.state.value + 1 });
    console.log("执行 setState 后值为：", this.state.value);
    console.log(
      "执行完 setState 后，DOM 中值为：",
      document.querySelector(".classValue").textContent
    );
  };

  // 这个函数给 onClick。加上了 setTimeout，使其成为异步执行
  // 不属于 React 默认进行批处理更新的场景
  // 执行 setState 后会立即触发组件更新流程
  // 等组件更新流程执行完后，
  // 才会回到 handleClick 继续执行后面的打印语句
  // 所以两次输出值相等

  // 注意到：DOM 值也是更新了的，说明提交阶段也被执行了。
  handleClickAsync = () => {
    setTimeout(() => {
      this.handleClick();
    });
  };

  render() {
    return (
      <div>
        <fieldset>
          <legend>类组件</legend>
          当前值：<span className="classValue">{this.state.value}</span>
          <div style={{ marginTop: 20 }}>
            <button onClick={this.handleClick}>在回调函数中同步执行</button>
            <div style={{ marginTop: 20 }}>
              <button onClick={this.handleClickAsync}>
                在回调函数中异步执行(通过setTimeout模拟)
              </button>
            </div>
          </div>
        </fieldset>
      </div>
    );
  }
}

function FunctionComponent() {
  const [state, setState] = useState(0);

  /**
   * 函数中的 state 都是闭包引用的，所以一直都是旧值。
   *
   * 但 handleClick 中 DOM 中的值是旧值。
   * 而 handleClickAsync 中 DOM 中的值是新值。
   * */
  const handleClick = () => {
    console.log("==========开始执行 handleClick =========");
    console.log("执行前值为：", state);
    setState(state + 1);
    console.log("执行 setState 后值为：", state);
    console.log(
      "执行完 setState 后，DOM 中值为：",
      document.querySelector(".functionValue").textContent
    );
  };

  const handleClickAsync = () => {
    setTimeout(handleClick);
  };

  return (
    <div>
      <fieldset>
        <legend>函数组件</legend>
        当前值：<span className="functionValue">{state}</span>
        <div style={{ marginTop: 20 }}>
          <button onClick={handleClick}>在回调函数中同步执行</button>
          <div style={{ marginTop: 20 }}>
            <button onClick={handleClickAsync}>在回调函数中异步执行</button>
          </div>
        </div>
      </fieldset>
    </div>
  );
}
