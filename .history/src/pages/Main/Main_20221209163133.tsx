import React from 'react'
import { ConfigProvider, Button, theme, message } from 'antd'
import 'antd/dist/reset.css'

message.info('提示信息')
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
        <Button onClick={() => message.info('test提示信息')}>test</Button>
      </ConfigProvider>
    </>
  )
}