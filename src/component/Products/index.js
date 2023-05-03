import React from 'react'
import './Style.scss'
import ProductSlider from '../slickSlider/ProductSlider'
const Products = ({WomenProductSliderData}) => {
    return (
        <div className='category'>
            <div className='cat-text'>
                <span>New In</span>
                <h2 > Shop By Category</h2>
            </div>
           <ProductSlider variant='category' WomenProductSliderData={WomenProductSliderData}/>

        </div>
    )
}

export default Products