import React from 'react'
import { ConfigProvider, Button } from 'antd'
import 'antd/dist/reset.css'
export default function Main() {
  return (
    <>
      <div>Main</div>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#00b96b'
          }
        }}
      >
        <Button />
      </ConfigProvider>
    </>
  )
}
