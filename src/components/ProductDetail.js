import React, { Fragment, useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useDispatch } from 'react-redux';
import cartSlice from '../store/cart-slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetail = ({item}) => {

   const dispatch = useDispatch();
   const addToCart = (item) => {
    dispatch(cartSlice.actions.fixId(item.id))
    dispatch(cartSlice.actions.addToCart(item))
   }
   const [amount,setAmount] = useState(1);
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
        <div className='my-auto d-flex flex-column flex-md-row justify-content-md-center align-items-md-center'>
            <div className='row g-0'>
                <div className='col-md-5 text-center'>
                    <LazyLoadImage
                        effect='blur'
                        src={item[0].img} className = "img-fluid img-thumbnail imgPhoto"
                        alt={item[0].img} 
                        width={250}
                    />
                </div>
                <div className='col-md-7 mt-3'>
                    
                    <div className='text-center text-md-start'>
                        <h1 className='h4 fw-bold'> {item[0].title} </h1>
                        <p className='fs-5 fw-semibold'>
                            {item[0].desc}
                        </p>
                    </div>
                   
                    <div className='d-flex flex-row justify-content-center justify-content-lg-start'>
                        <div className='input input-group' >
                            <button className='btn btn-dark' onClick={() => setAmount(prevAmount => Number(prevAmount)-1)}><i className='fas fa-minus'></i></button>
                            <input type={'number'}  className=' form-control text-center fw-bold' onChange={(e) => setAmount(e.target.value)} value={amount} min={'1'} max={'99'}></input>
                            <button className='btn btn-dark' onClick={() => setAmount(prevAmount => Number(prevAmount)+1)}><i className='fas fa-plus'></i></button>
                        </div>
                        <div className='mx-3 fs-5 fw-semibold col-md-9'>{(item[0].price * amount).toFixed(2)}$</div>
                    </div>
                    
                    <div className='d-flex my-3 justify-content-center justify-content-lg-start'>
                        <button className='fw-bold btn btn-secondary' 
                        onClick={() => {
                            for (let i = 0; i < amount; i++) {
                                addToCart(item[0]) 
                                addedSuccessfully();            
                            }
                        }}
                        >Add To Cart</button>
                        <button  className='mx-2 fw-bold btn btn-secondary'
                        onClick={() => toast.success(`Ordered ${amount} ${amount > 1 ? 'items' : 'item'} of ${item[0].title} !`, {
                            position: "top-right",
                            autoClose: 500,
                            hideProgressBar: true,
                            closeOnClick: true,
                            pauseOnHover: false,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                            })}
                        >Order Now</button>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="colored"
                        />
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default ProductDetail