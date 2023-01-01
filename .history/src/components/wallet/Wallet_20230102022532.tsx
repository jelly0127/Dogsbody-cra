import { Button, ConfigProvider } from 'antd'
import React from 'react'
import './Wallet.less'
import Jelly from '../../images/jelly.jpg'
export default function Wallet() {
  return (
    <div className="root_box">
      <label className="wallet_icon" htmlFor="b">
        <img src={Jelly} alt="" />
      </label>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: 'none'
          }
        }}
      >
        <Button type="primary" id="b" className="wallet_btn">
          cnnect
        </Button>
      </ConfigProvider>
    </div>
  )
}
