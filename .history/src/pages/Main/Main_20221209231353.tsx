import { ConfigProvider, Button, theme, message } from 'antd'
import 'antd/dist/reset.css'
import { Link } from 'react-router-dom'
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

      <button>Http</button>
    </>
  )
}
