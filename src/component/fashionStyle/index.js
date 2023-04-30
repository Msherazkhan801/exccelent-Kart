import React from 'react'
import quality from '../../assets/images/quality-control.png'
import style from '../../assets/images/tuxedo.png'
import comfort from '../../assets/images/home.png'
import './style.scss'
const Fashion = () => {
  return (
    <div className='fashion'>
      <h2>DURABLE. FASHIONABLE. WELL MADE.</h2>
      <div className='fashion-category'>
        <div className='quality'>
          <img src={quality} alt='pic' width='13%' height='auto' />
          <h3>Quality</h3>
          <h6>
            We guarantee that only the finest leather and materials are used. We are committed to manufacturing and importing the best quality product, evident in every finished pair of shoes.
          </h6>
        </div>
        <div className='style'>
          <img src={style} alt='pic' width='20%' height='auto' />
          <h3>style</h3>
          <h6>
            LOGO is dedicated to creating beautiful and unique shoes with exceptional impeccable style
          </h6>
        </div>
        <div className='comfort'>
          <img src={comfort} alt='pic' width='20%' height='auto' />
          <h3>comfort</h3>
          <h6>Our footwear collection is crafted with unmatched attention to detail that are ultra luxurious, super comfortable and a joy to wear.
          </h6>
        </div>
      </div>
    </div>
  )
}

export default Fashion