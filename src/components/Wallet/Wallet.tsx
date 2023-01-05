import React from 'react'
import styled from 'styled-components'
import { flexCenter } from '../../style'
import WALLETIMG from './wallet.png'
import { filterAddress } from '../../tools/index'
import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
const WalletRoot = styled.div`
  width: 110px;
  height: 30px;
  border-radius: 45px;
  border: 2px solid rgba(235, 47, 6, 1);
  color: #ffffff;
  text-align: center;
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
`
const ImgBox = styled.div`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .box {
    width: 30px;
    height: 30px;
    background-color: rgba(229, 80, 57, 1);
    border-radius: 45px;
    ${flexCenter}
    img {
      width: 16px;
      height: 16px;
      margin-left: -2px;
    }
  }
  p {
    width: 80%;
    height: 100%;
  }
`
export default function Wallet() {
  const { isConnected, address } = useAccount()
  const { connect } = useConnect({
    onSuccess(data) {
      console.log('Connect', data)
    }
  })
  return (
    <WalletRoot
      onClick={() => (!isConnected ? connect({ connector: new InjectedConnector() }) : '')}
    >
      <ImgBox>
        <div className="box">
          <img src={WALLETIMG} alt="" />
        </div>
        {isConnected ? <p>{filterAddress(address)}</p> : <p>connect</p>}
      </ImgBox>
    </WalletRoot>
  )
}
