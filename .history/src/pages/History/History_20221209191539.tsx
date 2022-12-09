import React, { useContext } from 'react'
import { MyContext } from '../../MyContext'

export default function History() {
  const { count } = useContext(MyContext)

  return (
    <>
      <div>Hisrory</div>

      <div>我接收到的context是{count}</div>
    </>
  )
}
