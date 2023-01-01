import React, { useState } from 'react'
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined
} from '@ant-design/icons'
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
      mode="horizontal"
      items={items}
    />
  )
}
