import { Button } from 'antd'
import React from 'react'

export default function Wallet() {
  return (
    <div>
      Wallet
      <Button type="primary" icon={<WalletOutlined />}>
        Search
      </Button>
    </div>
  )
}
