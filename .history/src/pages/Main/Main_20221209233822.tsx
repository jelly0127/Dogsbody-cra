import { ConfigProvider, Button, theme, message } from 'antd'
import 'antd/dist/reset.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getData } from '../../http/api'
export default function Main() {
  const [data, setData] = useState('')
  return (
    <>
      <div>Main</div>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
          token: {
            colorPrimary: '#c57535'
          }
        }}
      >
        <Button onClick={() => message.success('test提示信息')}>test</Button>
      </ConfigProvider>
      <Link to={'/'}>black</Link>

      <button
        onClick={() => {
          getData({ id: 888 })
            .then((res) => {
              console.log(res)
              message.success('getDataSuccess!')
            })
            .catch((err) => {
              console.log(err)
            })
        }}
      >
        Http
      </button>
      <h3></h3>
    </>
  )
}
