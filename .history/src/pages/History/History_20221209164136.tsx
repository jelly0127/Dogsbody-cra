import React, { useContext } from 'react'
export default function Hisrory() {
  const { data, setData } = useContext(MyContext)
  return (
    <>
      <div>Hisrory</div>

      <div>
        我接收到的context是{data}
        <input value={data} onChange={(e) => setData(e.target.value)}></input>
      </div>
    </>
  )
}