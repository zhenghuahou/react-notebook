export default function Code(props) {
  const {children} = props;
  const doExec = () => {
    document.querySelectorAll('code .code')?.forEach(element => {
      const inputDom = element.querySelector('.input');
      let ouputDom = element.querySelector('.output');
      const inputText = inputDom?.textContent
      if (inputText) {
        if(!ouputDom){
          ouputDom  = document.createElement('i');
          ouputDom.className='output';
          inputDom.parentNode.insertBefore(ouputDom,null);
        }
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
          {children}
          {/* <span className="code">
            <i className="input">obj.count = 1</i>
            <i className="output"></i>
          </span> */}
        </code>
      </pre>
    </div>
  )
}