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
            colorPrimary: '#c57535'
          }
        }}
      >
        <Button>test</Button>
      </ConfigProvider>
    </>
  )
}
