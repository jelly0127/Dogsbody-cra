import { Button, ConfigProvider } from 'antd'
import React from 'react'
import './Wallet.less'
import Jelly from '../../images/jelly.jpg'
import styled from 'styled-components'
const IButton = styled(Button)`
  color: ${(props: any) => (props.primary ? 'black' : 'pink')};
`
export default function Wallet() {
  return (
    <div className="root_box">
      <label className="wallet_icon" htmlFor="b">
        <img src={Jelly} alt="" />
      </label>

      <div id="b" className="wallet_btn">
        connect
      </div>
      <IButton>1</IButton>
      <IButton primary>1</IButton>
    </div>
  )
}
