import reactLogo from '../../assets/react.svg'
import { useSelector, useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount
} from '../../redux/counterSlice'

import '../../App.less'
import { Link } from 'react-router-dom'

export default function Home() {
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
      <h2>Jelly</h2>

      <h1>Vite + React</h1>
      <br />
      <p>router</p>

      <p>Click jump to main</p>
      <Link to={'main'}>Main</Link>
      <p>Click to history</p>
      <Link to={'History'}>History</Link>

      <div>
        <br />
        <p>redux</p>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <p>{count}</p>
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
            incrementByAmount
          </button>
        </div>
      </div>
    </div>
  )
}