import React, { Fragment } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useDispatch } from 'react-redux';
import cartSlice from '../store/cart-slice';

const CartItems = ({item}) => {
    const dispatch = useDispatch();
    const removeFromCart = (id) => {
        dispatch(cartSlice.actions.removeFromCart(id));
    }
    
  return (
    <Fragment>
        <div className='row'>
            <div className = "mb-4 col-md-10 col-12">
                <div className='row text-center text-md-start g-0'>
                    <div className='col-12 col-md-5 '>
                        <LazyLoadImage
                            effect='blur'
                            src={item.img} className = "img-fluid img-thumbnail imgPhoto " width="200" height="200"
                            alt={item.img} 
                        />
                    </div>
                    <div className="col-12 col-md-7">
                    <div className="card-body">
                        <div className='d-flex justify-content-center justify-content-md-start m-md-2'>
                            <div>
                                <div className='h5 fw-semibold card-title'>{item.title}</div>
                                <div className='card-text fw-semibold'>{item.price}$</div>
                            </div>
                            <button onClick={() => removeFromCart(item.id)} className='btn btn-transprent text-primary d-md-none'><i className='fas fa-trash'></i></button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className='col-2 d-none d-md-block'>
                <button onClick={() => removeFromCart(item.id)} className='btn btn-transprent text-primary'><i className='fas fa-trash'></i></button>
            </div>
        </div>
    </Fragment>
  )
}

export default CartItems