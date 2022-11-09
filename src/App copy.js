import { useState } from "react"
//方式一 App,ExpensiveTree都多次渲染
// export default function App() {
//   let [color, setColor] = useState("red")
//   console.info('app')
//   return (
//     <div style={{ color }}>
//       <input value={color} onChange={e => setColor(e.target.value)} />
//       <ExpensiveTree />
//       <p style={{ color }}>Hello, world!</p>
//     </div>
//   )
// }


function ExpensiveTree() {
  let now = performance.now()
 console.info('ExpensiveTree now: ',now)
  return <p>I am a very slow component tree.</p>
}

//App,ExpensiveTree都不会多次渲染
// export default function App() {
//   console.info('app')
//   return (
//     <>
//       <Form />
//       <ExpensiveTree />
//     </>
//   )
// }

// function Form() {
//   let [color, setColor] = useState("red")
//   return (
//     <>
//       <input value={color} onChange={e => setColor(e.target.value)} />
//       <p style={{ color }}>Hello, world!</p>
//     </>
//   )
// }

//App,ExpensiveTree都不会多次渲染
export default function App() {
  console.info('app')
  return <ColorContainer expensiveTreeNode={<ExpensiveTree />}></ColorContainer>
}

function ColorContainer({ expensiveTreeNode }) {
  let [color, setColor] = useState("red")
  return (
    <div style={{ color }}>
      <input value={color} onChange={e => setColor(e.target.value)} />
      11
      {expensiveTreeNode}
      22
      <p style={{ color }}>Hello, world!</p>
    </div>
  )
}

