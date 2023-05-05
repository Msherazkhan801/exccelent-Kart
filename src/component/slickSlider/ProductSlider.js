import React from 'react'
import Slider from "react-slick";
import { ProductSliderData, sliderData, ShoesSliderData, ExplorMoreSliderData } from '../../utills/Api';
import './style.scss'
import { settings, mainSliderSettings, sheosettings } from '../../utills/SliderSetting';
import { Link, useNavigate } from 'react-router-dom';
const ProductSlider = ({ variant, womenSliderData, WomenProductSliderData, WomenShoesSliderData, WomenShoesSeller }) => {
    const navigate= useNavigate()
    const handleNavigate =(id) =>{
        navigate(`/colletion/${id}`)
    }
    let content;
    if (variant === 'category') {
        content = (
            <div className='category-slider'>
                <Slider {...settings} >
                    {WomenProductSliderData ? WomenProductSliderData.map((data) => {
                        return (
                     <Link to={`/collection/${data.id}`}><div key={data.id} className='image-wraper' onClick={()=>handleNavigate(data.id)} >
                                 <img src={data.image} alt='pic' />
                                <h3 className='heading'>{data.heading}</h3>
                            </div></Link>
                        )
                    }) : ProductSliderData?.map((data) => {
                        return (
                            <div key={data.id} className='image-wraper'  onClick={()=>handleNavigate(data.id)}>
                                <img src={data.image} alt='pic' />
                                <h3 className='heading'>{data.heading}</h3>
                            </div>
                        )
                    })

                    }
                </Slider>
            </div>
        )
    }
    if (variant === 'explore') {
        content = (
            <div className='category-slider'>
                <Slider {...settings} >
                    {ExplorMoreSliderData?.map((data) => {
                        return (
                            <div key={data.id} className='image-wraper'>
                                <img src={data.image} alt='pic' />
                                <h3 className='heading'>{data.heading}</h3>
                            </div>
                        )
                    })

                    }
                </Slider>
            </div>
        )
    }
    else if (variant === 'mainSlider') {
        content = (<div className='sliderWrapper'>
            <Slider {...mainSliderSettings} >
                {womenSliderData ? womenSliderData.map((data) => {
                    return (
                        <div key={data.id} className='image-wraper'>
                            <img src={data.image} alt='pic' />
                        </div>
                    )
                }) : sliderData?.map((data) => {
                    return (
                        <div key={data.id} className='image-wraper'>
                            <img src={data.image} alt='pic' />
                        </div>
                    )
                })

                }
            </Slider>
        </div>)
    }
    else if (variant === 'sheos') {
        content = (<div className='sliderWrapper'>
            <Slider {...sheosettings} >
                {WomenShoesSliderData ? WomenShoesSliderData?.map((data) => {
                    return (
                        <div key={data.id} className='image-wraper'>
                            <img src={data.image} alt='pic' />
                        </div>
                    )
                }) : WomenShoesSeller ? WomenShoesSeller?.map((data) => {
                    return (
                        <div key={data.id} className='image-wraper'>
                            <img src={data.image} alt='pic' />
                        </div>
                    )
                }) : ShoesSliderData?.map((data) => {
                    return (
                        <div key={data.id} className='image-wraper'>
                            <img src={data.image} alt='pic' />
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