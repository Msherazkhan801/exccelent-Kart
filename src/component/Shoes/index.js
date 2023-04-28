import React from 'react'
import ProductSlider from '../slickSlider/ProductSlider'
import "./style.scss"
import { Link } from 'react-router-dom'
const Shoes = () => {
  return (
    <div className='sheos-category'>
    <div className='cat-text'>
        <h2 >New ARRIVAL</h2>
        <Link href='#'>VIEW ALL</Link>
    </div>
   <ProductSlider variant='sheos'/>

</div>
  )
}

export default Shoes