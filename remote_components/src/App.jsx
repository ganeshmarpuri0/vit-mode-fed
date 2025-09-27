// import { useState } from 'react'
import './App.css'
import { Suspense,lazy,useState } from 'react'
const Button = lazy(() => import('./components/Button'))
function App() {
  const [showButton, setShowButton] = useState(false)
  return (
    <>

      <h1>Vite + React</h1>
      <Suspense fallback={<div>Loading...</div>}>
        {showButton && <Button />}
      </Suspense>
      <button onClick={() => setShowButton(!showButton)}>
        {showButton ? 'Hide' : 'Show'} Button
      </button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


    </>
  )
}

export default App
