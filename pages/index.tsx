import React from 'react'
import Header from '../components/Header'
import Trending from '../components/Trending'

const Home: NextPage = () => {
  return (
    <div className='min-x-screen'> 
      <Header />
        <div className='mt-10'/>
        <Trending />
        <div className='mt-20'/>
        {/* <CMCTable /> */}
    </div>
  )
}

export default Home