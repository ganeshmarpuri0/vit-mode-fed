// import { useState } from 'react'
import './App.css'
import Button1 from 'Button1/Button1'
import Button2 from 'Button2/Button2'
import useStore from './statemangement/store.js'
function App() {
  // const [count, setCount] = useState(0)
  const { count, increment,  } = useStore();


  return (
    <>
      <Button1 />
      <Button2 />
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>

      <h1>Store</h1>

    </>
  )
}

export default App
