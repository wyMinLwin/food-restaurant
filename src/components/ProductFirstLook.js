import React, { Fragment } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import cartSlice from '../store/cart-slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductFirstLook = ({item,display}) => {
    
    const dispatch = useDispatch();
    const addToCart = (item) => {
      dispatch(cartSlice.actions.fixId(item.id))
      dispatch(cartSlice.actions.addToCart(item))
    }
    const addedSuccessfully = () =>{
      toast.success(`This item is add successfully!`, {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
        })
    }

  return (
    <Fragment>

    <div className = "col-lg-6  mb-4 col-12 col-md-6">
        <div className = "item_container row" >
             
            <div className = "col-5">
                <div className = " menuPhoto position-relative">
                    <LazyLoadImage
                      effect='blur'
                      src={item.img} className = "img-fluid img-thumbnail imgPhoto " width="200" height="200"
                      alt={item.category} 
                    />
                  <div
                    className = "viewDetails fw-bold text-decoration-none position-absolute text-light opacity-0 top-50 start-50 translate-middle">
                    <Link to={`/detail/${item.id}`}>
                      <i className = "fa-solid fa-eye eye fs-4 text-danger"></i>
                    </Link>
                    <i onClick={() => 
                      {
                        addToCart(item)
                        addedSuccessfully()
                      }} className = "fa-solid fa-cart-plus cart fs-4 text-danger">

                    </i>
                  </div>
                </div>
            </div>
             
            <div className = "item_text col-7">
                <div className = "item_title d-flex justify-content-between">
                  <h5>{item.title}</h5>
                  <span className = "text-primary fw-bold">{item.price} $</span>
                </div>
                <hr className = "p-0 m-0" />
                <div className = {`text_description ${display}`}>
                  <p className = "m-0 text-muted">{item.desc}</p>
                </div>
            </div>
        </div>
        <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="colored"
      />
    </div>
   
    </Fragment>
  )
}

export default ProductFirstLook