import React, { useEffect, useState } from 'react'
import {  Navigate } from 'react-router-dom';
import Preloader from './Preloader'

const Loading = () => {
    const [isLoading,setIsLoading] = useState(true);

    //useEffect Hook for Preloader
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(!isLoading)
        },1200)
    },[])
    
  return (
    <div>
        {isLoading ? <Preloader /> :<Navigate to={"/home"}/>}   
    </div>
  )
}

export default Loading