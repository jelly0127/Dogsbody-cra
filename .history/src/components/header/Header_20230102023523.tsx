import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import Wallet from '../wallet/Wallet'
const items: MenuProps['items'] = [
  {
    label: 'HOME',
    key: 'home'
  },
  {
    label: 'IDO',
    key: 'ido'
  }
]

export default function Hearder() {
  const [current, setCurrent] = useState('home')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <div>
      <div className="logo"></div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <Wallet />
    </div>
  )
}
