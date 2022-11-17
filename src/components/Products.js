import React, { Fragment } from 'react'
import Navbar from './Navbar'

const Products = () => {

  return (
    <Fragment>
      <Navbar notHomeNavClass = {' fixed-top fixed-nav '}/>
      <div>Product</div>
    </Fragment>
  )
}

export default Products