import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import  bannerImage from "../../assets/images/Picsart_23-04-01_20-19-09-582_cfd1ea66-1a7a-4623-bc19-64928cb7ce73.webp" 
import './style.scss'
import Shoes from '../../component/Shoes'
import { ProductSliderData } from '../../utills/Api'
const Collection = () => {
  const {id}=useParams()
  const data=ProductSliderData.find((el)=> el.id==id)
 const [filter ,setFilter]=useState(false)
  return (
    <div className='collection'>
      <div className='header-collection-wraper'>
        <h4>{data.heading}</h4>
        <div className='header-collection'>
          <Link to={`/colletion/${ProductSliderData[0].id}`}>Formal</Link>
          <Link to={`/colletion/${ProductSliderData[1].id}`}>Casual</Link>
          <Link to={`/colletion/${ProductSliderData[2].id}`}>Sandal</Link>
          <Link to={`/colletion/${ProductSliderData[3].id}`}>Sleepers</Link>
        </div>
        <h5 onClick={()=>setFilter(p=>!p)}>{'filter'}</h5>
      </div>
      <div className='collection-banner'>
        <img src={data.secondaryimage ? data.secondaryimage : bannerImage } alt='pic'/>
      </div>
  
    </div>
  )
}

export default Collection