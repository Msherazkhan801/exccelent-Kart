import React from 'react'
import ProductSlider from '../../component/slickSlider/ProductSlider'
import Products from '../../component/Products'
import Shoes from '../../component/Shoes'
import ExplorMore from '../../component/exploreMore'
import AboutUs from '../About '
import Fashion from '../../component/fashionStyle'

const Shop = () => {
  return (
    <div>
        <ProductSlider variant='mainSlider'/>
        <Products/>
        <Shoes text='New ARRIVAL'/>
        <ExplorMore/>
        <Shoes text='best seller'/>
        <AboutUs/>
        <Fashion/>

    </div>
  )
}

export default Shop