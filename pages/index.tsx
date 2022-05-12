// import CMCtable from '../components/cmc-table/cmcTable'
import React from 'react'
import Header from '../components/Header'
import Trending from '../components/Trending'
// import SwapCryptoModal from '../components/swapCryptoModal'

export default function Home() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="min-h-screen">
      <Header />
      {/* <SwapCryptoModal /> */}
      <div className="mt-10" />
      <Trending />
      <div className="mt-20" />
      {/* <CMCtable /> */}
    </div>
  )
}
