import React from 'react'
import Slider from "react-slick";
import { ProductSliderData,sliderData } from '../../utills/Api';
import './style.scss'
import { settings, mainSliderSettings } from '../../utills/SliderSetting';
const ProductSlider = ({variant}) => {
let content ;
if(variant==='category'){
    content=(
            <div className='category-slider'>
            <Slider {...settings} >
                {ProductSliderData?.map((data) => {
                    return (
                        <div key={data.id} className='image-wraper'>
                            <img src={data.image} alt='pic'/>
                        </div>
                    )
                })
    
                }
            </Slider>
            </div>
        ) 
}
else if(variant==='mainSlider'){
    content=  (   <div className='sliderWrapper'>
    <Slider {...mainSliderSettings} >
        {sliderData?.map((data) => {
            return (
                <div key={data.id} className='image-wraper'>
                    <img src={data.image} alt='pic'/>
                </div>
            )
        })

        }
    </Slider>
    </div>)
}
else if(variant==='sheos'){
    content=  (   <div className='sliderWrapper'>
    <Slider {...settings} >
        {ProductSliderData?.map((data) => {
            return (
                <div key={data.id} className='image-wraper'>
                    <img src={data.image} alt='pic'/>
                </div>
            )
        })

        }
    </Slider>
    </div>)
}

return content
  
}


export default ProductSlider