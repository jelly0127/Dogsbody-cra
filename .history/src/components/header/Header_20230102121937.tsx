import React, { useState } from 'react'
import type { MenuProps } from 'antd'
import { Menu } from 'antd'
import { CryptoCards, Button } from '@web3uikit/core'

import Wallet from '../wallet/Wallet'
import Jelly from '../../images/jelly.jpg'
import './Header.less'
import styled from 'styled-components'
const IMenu = styled(Menu)`
  width: 160px;
  background-color: unset;
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
      <IMenu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <ConnectButton />
      <Wallet />
    </div>
  )
}
