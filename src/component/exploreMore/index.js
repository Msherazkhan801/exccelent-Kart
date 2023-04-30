import React from 'react'
import ProductSlider from '../slickSlider/ProductSlider'
const ExplorMore = () => {
    return (
        <div className='category'>
            <div className='cat-text'>
                <span>New In</span>
                <h2 > Explore More</h2>
            </div>
           <ProductSlider variant='explore'/>

        </div>
    )
}

export default ExplorMore