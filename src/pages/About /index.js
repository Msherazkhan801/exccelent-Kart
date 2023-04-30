import React from 'react'
import './style.scss'
const AboutUs = () => {
    return (
        <div className='about-us'>
            <div className='about-us-text'>
                <h3>About us</h3>
                <p>LOGO established itself as a trusted source of unique footwear as we proudly announce our products as “Made in Pakistan ''.  LOGO dedicates itself to quality, unique design, and utmost comfort. Come join the spirit of ultimate fashion footwear to indulge yourself with uniqueness & sophistication which is constructed with high-quality craftsmanship.</p>
            </div>
            <div className='about-us-image'>
                <img src={'../images/about_us.webp'} alt='pic'/>
            </div>
        </div>
    )
}

export default AboutUs