import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import  bannerImage from "../../assets/images/Picsart_23-04-01_20-19-09-582_cfd1ea66-1a7a-4623-bc19-64928cb7ce73.webp" 
import './style.scss'
import {  WomenProductSliderData, WomenShoesSliderData } from '../../utills/Api'
import Card from '../../component/Card'
const WomenCollection = () => {
  const {id}=useParams()
const addToCart =()=>{
    
}
const filterd =WomenShoesSliderData.filter((data)=>data.heading && data.heading.toLocaleLowerCase().includes(search))

  const data=WomenProductSliderData.find((el)=> el.id==id)
 const [filter ,setFilter]=useState(false)
 const [search ,setSearch]=useState('')
  return (
    <div className='collection'>
      <div className='header-collection-wraper ' >
        <h4>{data.heading}</h4>
        <div className='header-collection women-collection'>
          <Link to={`/women-colletion/${WomenProductSliderData[0].id}`}>Heigh Heel</Link>
          <Link to={`/women-colletion/${WomenProductSliderData[1].id}`}>Flat Sandal</Link>
        </div>
        {!filter && (<h5 onClick={()=>setFilter(p=>!p)}>{'filter'}</h5>)}
        {filter && (<div className='collection-search'><input placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)}/> </div>)}
      </div>
      <div className='collection-banner'>
        <img src={data.secondaryimage ? data.secondaryimage : bannerImage } alt='pic'/>
      </div>
    <div className='card-product'>
      {filterd.map((data)=>{
        return(

          <Card name={data.heading} RS={data.Rs} disc={data.text} image={data.image} onClick={addToCart}/>
        )
      })}
      </div>
    </div>
  )
}

export default WomenCollection