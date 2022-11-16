export default function Operator() {
  const doExec = () => {
    document.querySelectorAll('code .code')?.forEach(element => {
      const inputDom = element.querySelector('.input');
      const ouputDom = element.querySelector('.output');
      const inputText = inputDom?.textContent
      if (inputText) {
        ouputDom.innerHTML = '// ' + eval(inputText)
      }
    });
  }

  const hideExecResult = () => {
    document.querySelectorAll('code .output')?.forEach(e => {
      e.innerHTML = '';
    })
  }

  return (
    <>
      <p>
        Object.is() is not equivalent to the == operator. The == operator applies various coercions to both sides (if they are not the same type) before testing for equality (resulting in such behavior as "" == false being true), but Object.is() doesn't coerce either value.
      </p>
      <br></br>
      <p>
        <b>Object.is() is also not equivalent to the === operator. The only difference between Object.is() and === is in their treatment of signed zeros and NaN values. The === operator (and the == operator) treats the number values -0 and +0 as equal, but treats NaN as not equal to each other.</b>
      </p>
      <div className="code-wrap">
        <div className="opetator-area">
          <button className="exec-code" onClick={() => {
            doExec();
          }}>执行代码</button>
          <button className="exec-code" onClick={() => {
            hideExecResult();
          }}>隐藏执行结果</button>
        </div>
        <pre>
          <code suppressContentEditableWarning={true} contentEditable={true}>
            <span className="code">
              <i className="input">NaN === NaN</i>
              <i className="output"></i>
            </span>
            <span className="code q">
              <i className="input">Object.is(NaN) === Object.is(NaN)</i>
              <i className="output"></i>
            </span>
            <span className="code">
              <i className="input">-0 === +0</i>
              <i className="output"></i>
            </span>
            <span className="code q">
              <i className="input"> Object.is(+0,-0)</i>
              <i className="output"></i>
            </span>
          </code>
        </pre>

      </div>
    </>
  )
}