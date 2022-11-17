import React, { Fragment } from 'react'
import ArrowApp from './ArrowApp'
import Banner from './Banner'
import Category from './Category'
import Navbar from './Navbar'
import Recommend from './Recommend'


const Home = () => {
  return (
    <Fragment>
      <div id='home'>
        <Navbar />
        <Banner />
        <Recommend />
      </div>
      <Category />
      <ArrowApp />
      
    </Fragment>
  )
}

export default Home