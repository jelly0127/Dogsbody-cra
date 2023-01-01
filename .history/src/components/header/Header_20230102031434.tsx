import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import Wallet from '../wallet/Wallet'
import Jelly from '../../images/jelly.jpg'
import './Header.less'
import styled from 'styled-components'
const menu_style = styled.IMenu`
  width: 100%;
`
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
    <div className="header_root">
      <div className="logo_box">
        <img src={Jelly} alt="" />
        logo
      </div>
      <div className="menu_style">
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={items}
        />
      </div>

      <Wallet />
    </div>
  )
}
