import React, { Fragment, useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css'
import { useDispatch, useSelector } from 'react-redux'
import CartItems from './CartItems'
import cartSlice from '../store/cart-slice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({notHomeNavClass}) => {
    const cartItem = useSelector(state => state.cart)
    const [fixedNav,setFixedNav] = useState(false);
    const [scrollAmount,setScrollAmount] = useState(0);

    const orderCompleted = () => {
        toast.success(`Order Completed!`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        })
    }    
    const orderFailed = () => {
        toast.error('Nothing to order in the Cart!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    const dispatch = useDispatch();

    const removeAll = () => {
        dispatch(cartSlice.actions.removeAll());
    }
    
    useEffect(() => {
        const navbar = document.querySelector(".navbar");
        window.addEventListener('scroll',() => {
            setScrollAmount(window.pageYOffset)
        })
        if ( scrollAmount > navbar.getBoundingClientRect().height ) {
            setFixedNav(true)
        } else {
            setFixedNav(false)
        }
       
    },[scrollAmount]);
    
    let activeClassName = 'nav-link active';

  return (
    <Fragment>

    <nav className={`navbar navbar-expand-lg navbar-dark shadow ${notHomeNavClass || '' } ${fixedNav ? ' fixed-top fixed-nav' : ' '}`}>
        <div className='container'>
            <Link to={'/home'}  className="navbar-brand" >
                <i className="fa-solid fa-burger fs-2"></i>
            </Link>

            {/* toggle button */}
            <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div
                className="socials fs-5 text-light d-flex justify-content-end d-md-none"
            >
                <i className="fa-solid fa-cart-shopping " data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                    <span className="position-relative  top-0 start-50 translate-middle badge rounded-pill bg-primary">{cartItem.totalQuantity}</span>
                </i>
            </div>
            {/* menus links */}


            <div
                className="collapse navbar-collapse justify-content-center"
                id="navbarSupportedContent"
                >
                <ul className="navbar-nav text-center">
                <li className="nav-item">
                    {/* <a className="nav-link active" aria-current="page" href="#home">Home</a> */}
                    <NavLink to = "/home" className={({ isActive }) =>
                        isActive ? activeClassName : 'nav-link'
                    }>
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to = "/products" className={({ isActive }) =>
                        isActive ? activeClassName : 'nav-link'
                    }>
                        Products
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to = "/" className={({ isActive }) =>
                        isActive ? activeClassName : 'nav-link'
                    }>
                        About
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to = "/" className={({ isActive }) =>
                        isActive ? activeClassName : 'nav-link'
                    }>
                        Services
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to = "/" className={({ isActive }) =>
                        isActive ? activeClassName : 'nav-link'
                    }>
                        Testimonials
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to = "/" className={({ isActive }) =>
                        isActive ? activeClassName : 'nav-link'
                    }>
                        Contact
                    </NavLink>
                </li>
                </ul>
            </div>
            {/* socials links */}
            <div
                className="socials fs-5 text-light d-lg-flex justify-content-end d-none"
                >
                <i className="fa-solid fa-cart-shopping" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
                    <span className="position-relative  top-0 start-50 translate-middle badge rounded-pill bg-primary">{cartItem.totalQuantity}</span>
                </i>
               
            </div>
        
        </div>
    </nav>
    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title fw-bold h4" id="offcanvasWithBothOptionsLabel">Your Cart</h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
            {cartItem.itemsList.map( item => (<CartItems item={item} key={ item.id} />))}
        </div>
        <div className='offcanvas-footer'>
            <div className='d-flex justify-content-between align-items-center mx-3'>
                <span className='fs-4 fw-semibold'>Total Price:</span>
                <span className='fs-5 fw-semibold'>
                    {
                    
                       cartItem.itemsList.reduce((initValue,item) => {  
                            initValue =parseFloat(initValue) + parseFloat(item.price); 
                            return initValue.toFixed(2);               
                        },0)
                    }$
                </span>
            </div>
            <hr />
            <div className='d-flex justify-content-center my-3'>
                <button onClick={() => removeAll()} className='mx-2 fw-bold btn btn-primary'>Remove All</button>
                <button className='mx-2 fw-bold btn btn-secondary'
                onClick={() => {
                    if (cartItem.totalQuantity > 0){
                        removeAll()
                        orderCompleted();
                    } else {
                        orderFailed();
                    }
                }}
                >Order Now
                </button>
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
    </Fragment>
  )
}

export default Navbar