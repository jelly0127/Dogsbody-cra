import React, { useState } from 'react'
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: 'home'
  },
  {
    label: 'Ido',
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
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  )
}
