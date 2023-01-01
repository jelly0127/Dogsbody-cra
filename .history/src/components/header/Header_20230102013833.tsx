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
    label: 'Navigation One',
    key: 'mail',
    icon: <MailOutlined />
  },
  {
    label: 'Navigation Two',
    key: 'app',
    icon: <AppstoreOutlined />
  },
  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <SettingOutlined />
  },
  {
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Navigation Four - Link
      </a>
    ),
    key: 'alipay'
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
