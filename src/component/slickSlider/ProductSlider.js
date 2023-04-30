import React from 'react'
import Slider from "react-slick";
import { ProductSliderData,sliderData ,ShoesSliderData,ExplorMoreSliderData} from '../../utills/Api';
import './style.scss'
import { settings, mainSliderSettings,sheosettings } from '../../utills/SliderSetting';
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
if(variant==='explore'){
    content=(
            <div className='category-slider'>
            <Slider {...settings} >
                {ExplorMoreSliderData?.map((data) => {
                    return (
                        <div key={data.id} className='image-wraper'>
                            <img src={data.image} alt='pic'/>
                            <h3 className='heading'>{data.heading}</h3>
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
    <Slider {...sheosettings} >
        {ShoesSliderData?.map((data) => {
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