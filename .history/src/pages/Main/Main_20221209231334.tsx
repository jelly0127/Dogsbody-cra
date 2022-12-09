import { ConfigProvider, Button, theme, message } from 'antd'
import 'antd/dist/reset.css'
import { Link } from 'react-router-dom'
import http from '../../http/http'
export default function Main() {
  const getData = () => {
    http("get", '/bolg/{id}').then(res => {
      resolve(res);
    }, error => {
      console.log("网络异常~", error);
      reject(error)
    })
  })
}
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

    <button>Http</button>
  </>
)
}
