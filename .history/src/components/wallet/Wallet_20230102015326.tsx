import { Button } from 'antd'
import React from 'react'
import { WalletFilled } from '@ant-design/icons'
import './Wallet.less'
export default function Wallet() {
  return (
    <div className="root_box">
      <div className="wallet_icon"></div>
      <Button type="primary" icon={<WalletFilled />}>
        Search
      </Button>
    </div>
  )
}
