import { Button } from 'antd'
import React from 'react'
import { WalletFilled } from '@ant-design/icons'
import './Wallet.less'
export default function Wallet() {
  return (
    <div className="root_box">
      <label className="wallet_icon" htmlFor="b">
        <WalletFilled size={height: 100%;
  width: 100%;}/>
      </label>
      <Button type="primary" id="b">
        cnnect
      </Button>
    </div>
  )
}
