import { useContext } from 'react'
import { MyContext } from '../../MyContext'

export default function History() {
  const { Name } = useContext(MyContext)

  return (
    <>
      <div>History page</div>
      <p>useContext</p>
      <div>接收到的context是{Name}</div>
    </>
  )
}
