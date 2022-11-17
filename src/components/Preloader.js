import React from 'react'
import ReactLoading from 'react-loading'

const Preloader = () => {
  return (
    
    <div className='wrapper d-flex align-items-center'>
        <div className='container d-flex flex-column align-items-center'>
            <div className='my-4 fs-4 text-center fw-semibold text-primary'>Order fast!,Eat fast!</div>
            <ReactLoading type={'bars'} color={'#d72323'} width={60} />    
        </div>
    </div>
    
  )
}

export default Preloader