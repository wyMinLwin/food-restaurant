import React, { useEffect, useState } from 'react'

const ArrowApp = () => {
    const [scrollAmount,setScrollAmount] = useState(0)

    useEffect(() => {   
      window.addEventListener('scroll',() => {
          setScrollAmount(window.pageYOffset)
      })
    },[scrollAmount]);
    
  return (
    <a href="#home" className={`arrowUp  ${scrollAmount > 355 ? ' show-arrowUp' : ''}`} onClick={() => {console.log('h')}}>
        <i className={`fa-solid fa-arrow-up text-light fs-5 text-center `}></i>
    </a>
  )
}

export default ArrowApp