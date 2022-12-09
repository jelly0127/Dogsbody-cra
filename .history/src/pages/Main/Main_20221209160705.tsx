import React from 'react'
import { ConfigProvider, Button, theme } from 'antd'
import 'antd/dist/reset.css'
export default function Main() {
  return (
    <>
      <div>Main</div>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: '#00b96b'
          }
        }}
      >
        <Button>test</Button>
      </ConfigProvider>
    </>
  )
}
