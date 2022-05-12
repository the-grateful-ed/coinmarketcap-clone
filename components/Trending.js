import React, { useState } from 'react'
import fire from '../assets/fire.png'
import btc from '../assets/btc.png'
import usdt from '../assets/usdt.png'
import gainers from '../assets/gainers.png'
import recent from '../assets/recent'
import ReactSwitch from 'react-switch'

const styles = {
    trendingWrapper: 'mx-auto'
}

const Trending = () => {
    const [checked, setChecked] = useState(false)
  return (
    <div className='text-white'>
        <div className={styles.trendingWrapper}>
            <div className='flex justify-between'>
                <h1 className={styles.h1}>Todays Crypto Prices by Market Cap</h1>
            <div className='flex'>
                <p className='text-gray-400'>Highlights &nbsp</p>
                <ReactSwitch checked={checked} onChange={() => {setChecked(!checked)}}/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Trending