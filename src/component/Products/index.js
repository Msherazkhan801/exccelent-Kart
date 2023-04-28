import React from 'react'
import './Style.scss'
import ProductSlider from '../slickSlider/ProductSlider'
const Products = () => {
    return (
        <div className='category'>
            <div className='cat-text'>
                <span>New In</span>
                <h2 > Shop By Category</h2>
            </div>
           <ProductSlider variant='category'/>

        </div>
    )
}

export default Products