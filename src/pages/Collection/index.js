import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import  bannerImage from "../../assets/images/Picsart_23-04-01_20-19-09-582_cfd1ea66-1a7a-4623-bc19-64928cb7ce73.webp" 
import './style.scss'
import { ProductSliderData, ShoesSliderData, } from '../../utills/Api'
import Card from '../../component/Card'
const Collection = () => {
  const {id}=useParams()
  const data=ProductSliderData.find((el)=> el.id==id)
 const [filter ,setFilter]=useState(false)
 const [search ,setSearch]=useState('')

const filterd =ShoesSliderData.filter((data)=>data.heading && data.heading.toLocaleLowerCase().includes(search))
 const addToCart =()=>{
  console.log('clicked');
 }

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
        {!filter && (<h5 onClick={()=>setFilter(p=>!p)}>{'filter'}</h5>)}
        {filter && (<div className='collection-search'><input placeholder='Search' value={search} onChange={(e)=>setSearch(e.target.value)}/> </div>)}

      </div>
      <div className='collection-banner'>
        <img src={data.secondaryimage ? data.secondaryimage : bannerImage } alt='pic'/>
      </div>
      <div className='card-product'>
      {filterd.map((data)=>{
        return(
          <Card name={data.heading} disc={data.text} RS={data.Rs} image={data.image} onClick={addToCart}/>
        )
      })}
      </div>
    </div>
  )
}

export default Collection