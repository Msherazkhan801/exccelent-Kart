import React from 'react'
import ProductSlider from '../../component/slickSlider/ProductSlider'
import Products from '../../component/Products'
import Shoes from '../../component/Shoes'
import ExplorMore from '../../component/exploreMore'
import AboutUs from '../About '
import Fashion from '../../component/fashionStyle'
import Footer from '../../component/Footer'
import { womenSliderData ,WomenProductSliderData,WomenShoesSliderData,WomenShoesSeller} from '../../utills/Api'

const WomenShop = () => {
  return (
    <div>
        <ProductSlider variant='mainSlider' womenSliderData={womenSliderData}/>
        <Products  WomenProductSliderData={WomenProductSliderData}/>
        <Shoes text='New ARRIVAL' WomenShoesSliderData={WomenShoesSliderData}/>
        <ExplorMore/>
        <Shoes text='best seller' WomenShoesSeller={WomenShoesSeller}/>
        <AboutUs/>
        <Fashion/>
        <Footer/>

    </div>
  )
}

export default WomenShop