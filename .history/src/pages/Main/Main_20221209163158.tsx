import React from 'react'
import { ConfigProvider, Button, theme, message } from 'antd'
import 'antd/dist/reset.css'

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
        <Button onClick={() => message.error('test提示信息')}>test</Button>
      </ConfigProvider>
    </>
  )
}
