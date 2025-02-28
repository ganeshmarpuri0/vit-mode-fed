// import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import useStore from 'store/store'

function App() {
  // const [count, setCount] = useState(0)
  const count = useStore((state) => state.count)
  const setCount = useStore((state) => state.increment)
  const incrementBy = useStore((state) => state.incrementBy)
  return (
    <>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount()}>
          count is {count}
        </button>
        <button onClick={() => incrementBy(2)}>Increment by 2</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Button />

    </>
  )
}

export default App
