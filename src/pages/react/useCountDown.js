import { useLayoutEffect ,memo, useEffect, useRef,useState} from "react";



export default function App() {

  let timer =useRef();
  const [count,setCount] = useState(0);
  const message = count?`${count}s 后重试`: `点击获取验证码`;
  const disabled = !!count;
  useEffect(()=>{
    timer.current &&  clearInterval(timer.current);
    return ()=>{
      timer.current &&  clearInterval(timer.current);
    }
  });

  const handleClick = ()=>{
    setCount(3);
    timer.current = setInterval(()=>{
      console.info(' [log] setInterval disabled:',disabled, ' count:',count);
      setCount((count)=>{
        if(count === 1){
          clearInterval(timer.current);
        }
        return count-1;
      })
    })
  }

  return (
    <div className="App">
      <button onClick={handleClick} disabled={disabled}>{message}
        </button>
    </div>
  );
}
