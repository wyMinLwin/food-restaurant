import React, { useState } from 'react'
import {  useSelector } from 'react-redux';
import ProductFirstLook from './ProductFirstLook';

const Category = () => {
    
    const menu = useSelector(state => state.menu);
    
    const [itemsToShow,setItemsToShow] = useState(menu);

    const btnArray = menu.reduce(
        (initValue,item) => {
            if(! initValue.includes(item.category)) initValue.push(item.category);
            return initValue;
        }
    ,['All']);

    const displayMenuItems =  (menuItemData) => (    
        menuItemData.map(item => <ProductFirstLook item={item} key={ item.id}/>)
    )
    
  return (
    <section id="category">
        <div className="container my-4">
            <div className="category_title px-lg-5 mx-lg-5 w-auto ">
                <h1 className="text-center display-2 ">We offer people best ways to eat best food.</h1>
                <h2 className="text-center mt-3">
                <span className="text-primary">C</span>ategory
                </h2>
                <div className="bar mx-auto"></div>
            </div>

            <div className="btn_container  d-flex justify-content-start justify-content-md-center mt-2 py-4">
                {
                    btnArray.map( btn => (
                        <button onClick={(e) => {
                            const btnCategoryName = e.target.value;
                             
                            const filterdCategory = menu.filter(function (item) {
                                return btnCategoryName === item.category;
                            });
                            setItemsToShow(filterdCategory)
                            if (btnCategoryName === "All") setItemsToShow(menu);
                        }} className = "customizeBtn mx-2" data-id={btn} key={btn} value={btn}> {btn} </button>
                    ))
                }
            </div>
                
            <div className="menu_container row my-5">
                {
                   displayMenuItems(itemsToShow)
                }
            </div>
        </div>
       
    </section>
  )
}

export default Category