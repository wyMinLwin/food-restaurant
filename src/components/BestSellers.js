import React, { Fragment } from 'react'
import Slider from "react-slick";
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useSelector } from 'react-redux';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const BestSellers = () => {
  
  let settings = {
    dots: false,
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
           
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
           
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }; 
    const menu = useSelector(state => state.menu);
  return (
    <Fragment>
        <div className='overflow-hidden'>

        <Slider {...settings}  className='mt-auto'>
            {
                menu.map(item => (
                    <div key={item.id} className='d-flex flex-column align-items-center justify-content-center'>
                      <div className='menuPhoto position-relative'>

                        <LazyLoadImage
                        effect='blur'
                        src={item.img} className = "img-fluid img-thumbnail imgPhoto"
                        alt={item.img} 
                        width={200}
                        />
                        
                        <div
                          className = "viewDetails fw-bold text-decoration-none position-absolute text-light opacity-0 top-50 start-50 translate-middle">
                          <Link to={`/detail/${item.id}`}>
                            <i className = "fa-solid fa-eye eye fs-4 text-danger"></i>
                          </Link>
                        </div>
                      </div>
                        <div className='fs-5 fw-semibold'>{item.title}</div>
                        <p className='fw-semibold'> {item.price}$</p>
                    </div>
                ))
                
            }
        </Slider>
        </div>
    </Fragment>
  )
}

export default BestSellers