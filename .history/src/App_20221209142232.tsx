import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.less'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/counterSlice'
function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p>Jelly</p>

      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            aria-label="incrementByAmount value"
            onClick={() => dispatch(incrementByAmount(3))}
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
