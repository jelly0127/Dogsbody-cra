import React from 'react'
import './Wallet.less'
import Jelly from '../../images/jelly.jpg'
import { InjectedConnector } from '@web3-react/injected-connector'
export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42]
})
export default function Wallet() {
  return (
    <div className="root_box">
      <label className="wallet_icon" htmlFor="b">
        <img src={Jelly} alt="" />
      </label>

      <div id="b" className="wallet_btn">
        connect
      </div>
    </div>
  )
}
