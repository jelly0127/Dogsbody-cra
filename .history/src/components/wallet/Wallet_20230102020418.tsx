import { Button } from 'antd'
import React from 'react'
import { WalletFilled } from '@ant-design/icons'
import './Wallet.less'
import Jelly from '../../images/jelly.jpg'
export default function Wallet() {
  return (
    <div className="root_box">
      <label className="wallet_icon" htmlFor="b">
        <img src="" alt="" />
      </label>
      <Button type="primary" id="b">
        cnnect
      </Button>
    </div>
  )
}
