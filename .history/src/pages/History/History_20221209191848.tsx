import React, { useContext } from 'react'
import { MyContext } from '../../MyContext'

export default function History() {
  const { Name } = useContext(MyContext)

  return (
    <>
      <div>Hisrory</div>

      <div>接收到的context是{Name}</div>
    </>
  )
}
