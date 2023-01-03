import React from 'react'
import './Wallet.less'
import Jelly from '../../images/jelly.jpg'
import { useWeb3React } from '@web3-react/core'

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
