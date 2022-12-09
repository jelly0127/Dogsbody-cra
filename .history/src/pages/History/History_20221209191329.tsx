import React, { useContext } from 'react'
import { MyContext } from '../../MyContext'

export default function History() {
  const count = useContext(MyContext)
  console.log('theme', count)

  return (
    <>
      <div>Hisrory</div>

      {/* <div>
        我接收到的context是{data}
        <input value={data} onChange={(e) => setData(e.target.value)}></input>
      </div> */}
    </>
  )
}
