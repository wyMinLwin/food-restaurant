import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import {  useParams } from 'react-router-dom';
import BestSellers from './BestSellers';
import Navbar from './Navbar'
import ProductDetail from './ProductDetail'

const Detail = () => {
  const menuItem = useSelector(state => state.menu);
  const {id} = useParams();
  const item = menuItem.filter(item => item.id === Number(id)); 

  return (
    <Fragment>
      <div className='wrapper d-flex flex-column'>
        <Navbar notHomeNavClass = {' fixed-nav '}/>
        <ProductDetail item={item} />
        <BestSellers />
      </div>
    </Fragment>
  )
}

export default Detail