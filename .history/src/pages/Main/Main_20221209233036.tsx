import { ConfigProvider, Button, theme, message } from 'antd'
import 'antd/dist/reset.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { getData } from '../../http/api'
export default function Main() {
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
          getData({ id: 2345 })
            .then((res) => {
              message.success('getData')
              console.log(res)
            })
            .catch((err) => {
              console.log(err)
            })
        }}
      >
        Http
      </button>
      {/* <button
        onClick={() => {
          axios
            .get('http://127.0.0.1:4523/m1/2064104-0-default/bolg/{id}', {
              params: { id: '5678' }
            })
            .then((res) => {
              console.log(res)
            })
            .catch((err) => {
              console.log(err)
            })
        }}
      >
        Http
      </button> */}
    </>
  )
}
