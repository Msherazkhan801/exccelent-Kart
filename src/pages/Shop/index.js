import React from 'react'
import ProductSlider from '../../component/slickSlider/ProductSlider'
import Products from '../../component/Products'
import Shoes from '../../component/Shoes'

const Shop = () => {
  return (
    <div>
        <ProductSlider variant='mainSlider'/>
        <Products/>
        <Shoes/>
    </div>
  )
}

export default Shop