import React from 'react'
import Slider from "react-slick";
import { ProductSliderData,sliderData ,ShoesSliderData,ExplorMoreSliderData} from '../../utills/Api';
import './style.scss'
import { settings, mainSliderSettings,sheosettings } from '../../utills/SliderSetting';
const ProductSlider = ({variant,womenSliderData,WomenProductSliderData,WomenShoesSliderData,WomenShoesSeller}) => {
let content ;
if(variant==='category'){
    content=(
            <div className='category-slider'>
            <Slider {...settings} >
                {WomenProductSliderData ? WomenProductSliderData.map((data) => {
                    return (
                        <div key={data.id} className='image-wraper'>
                            <img src={data.image} alt='pic'/>
                            <h3 className='heading'>{data.heading}</h3>

                        </div>
                    )
                }): ProductSliderData?.map((data) => {
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
        {womenSliderData ?womenSliderData.map((data)=>{
            return(
                <div key={data.id} className='image-wraper'>
                <img src={data.image} alt='pic'/>
            </div>
            )
        }) :sliderData?.map((data) => {
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
        {WomenShoesSliderData ? WomenShoesSliderData?.map((data) => {
            return (
                <div key={data.id} className='image-wraper'>
                    <img src={data.image} alt='pic'/>
                </div>
            )
        })  : WomenShoesSeller ?WomenShoesSeller?.map((data) => {
            return (
                <div key={data.id} className='image-wraper'>
                    <img src={data.image} alt='pic'/>
                </div>
            )
        }):  ShoesSliderData?.map((data) => {
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