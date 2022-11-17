import React from 'react'
import BurgerPng from '../assets/imgs/Burger.png';
import ChickenPng from '../assets/imgs/chicken.png';
import SandwichPng from '../assets/imgs/sandwich.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Recommend = () => {
  return (
    <div className="container cards " >
        <div className="row p-4">
            <div className="recom col-12 col-lg-4 col-md-7 mb-lg-0 mx-auto">
                <div className="card bg-black text-black" style={{height: "100%"}} >
                    <div className="card-body bg-secondary rounded-top rounded-circle">
                        <h3 className="card-title text-center">Smoky Chicken Burger</h3>
                        <p className="card-text text-muted text-center px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, velit!<a href="" className="px-2">View more.</a></p>
                    </div>
                    <LazyLoadImage 
                    effect='blur'
                    src={BurgerPng} className="card-img-bottom w-75 overflow-hidden mx-auto" alt="..." />
                </div>
            </div>
            <div className="recom col-12 col-lg-4 col-md-7 my-5 m-lg-0 mx-auto">
                <div className="card bg-black text-black" style={{height: "100%"}} >
                    <div className="card-body bg-secondary rounded-top rounded-circle">
                        <h3 className="card-title text-center">Tasty Fries Set</h3>
                        <p className="card-text text-muted text-center px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, velit!<a href="" className="px-2">View more.</a></p>
                 
                    </div>
                    <LazyLoadImage 
                    effect='blur'
                    src={ChickenPng} className="card-img-bottom w-100 overflow-hidden mx-auto " alt="..." />
                </div>
            </div>
            <div className="recom col-12 col-lg-4 col-md-7 mb-lg-0 mx-auto">
                <div className="card bg-black text-black" style={{height: "100%"}}>
                    <div className="card-body bg-secondary rounded-top rounded-circle">
                    <h3 className="card-title text-center">Beautiful Sofy Sandwich</h3>
                    <p className="card-text text-muted text-center px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, velit!<a href="" className="px-2">View more.</a></p>
                  
                    </div>
                    <LazyLoadImage
                    effect='blur'
                    src={SandwichPng} className=" card-img-bottom w-75 overflow-hidden mx-auto" alt="..." />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recommend