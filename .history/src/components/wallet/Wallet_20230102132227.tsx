import React from 'react'
import './Wallet.less'
import Jelly from '../../images/jelly.jpg'
import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider
} from '@web3modal/ethereum'

import { Web3Modal } from '@web3modal/react'

import { configureChains, createClient, WagmiConfig } from 'wagmi'

import { arbitrum, mainnet, polygon } from 'wagmi/chains'
export default function Wallet() {
  const chains = [arbitrum, mainnet, polygon]

  // Wagmi client
  const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId: '<562ab5aac6c29bbbafeedbd751f53974>' })
  ])
  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({ appName: 'web3Modal', chains }),
    provider
  })

  // Web3Modal Ethereum Client
  const ethereumClient = new EthereumClient(wagmiClient, chains)
  return (
    <div className="root_box">
      {/* <label className="wallet_icon" htmlFor="b">
        <img src={Jelly} alt="" />
      </label>

      <div id="b" className="wallet_btn">
        connect
      </div> */}
      <WagmiConfig client={wagmiClient}>{/* <HomePage /> */}</WagmiConfig>
      123
      <Web3Modal
        projectId="<562ab5aac6c29bbbafeedbd751f53974>"
        ethereumClient={ethereumClient}
      />
    </div>
  )
}
