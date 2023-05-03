import React from 'react'
import ProductSlider from '../slickSlider/ProductSlider'
import "./style.scss"
import { Link } from 'react-router-dom'
const Shoes = ({text, WomenShoesSliderData,WomenShoesSeller}) => {
  return (
    <div className='sheos-category'>
    <div className='cat-text'>
        <h2 >{text}</h2>
        <Link href='#'>VIEW ALL</Link>
    </div>
   <ProductSlider variant='sheos' WomenShoesSliderData={WomenShoesSliderData}   WomenShoesSeller={WomenShoesSeller}/>

</div>
  )
}

export default Shoes