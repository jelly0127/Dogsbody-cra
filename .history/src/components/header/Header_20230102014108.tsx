import React, { useState } from 'react'
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
const items: MenuProps['items'] = [
  {
    label: 'Home',
    key: 'home',
    icon: <MailOutlined />
  },
  {
    label: 'Ido',
    key: 'ido',
    icon: <AppstoreOutlined />
  }
]

export default function Hearder() {
  const [current, setCurrent] = useState('mail')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      defaultSelectedKeys="home"
      mode="horizontal"
      items={items}
    />
  )
}
