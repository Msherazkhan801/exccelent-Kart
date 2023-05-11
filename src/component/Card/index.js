import React from "react";
import './style.scss'
const Card = ({name,disc,image,RS,onClick}) => {
  return (
   
    <div className="card">
    <div className="card__image">
      <img src={image} alt={name} />
    </div>
    <div className="card__copy">
        <h5>{name}</h5>
        <h6>{disc}</h6>
        <h5>${RS}</h5>
        <span></span>
      <div className="rating"><span>rating:10/10</span><span onClick={onClick}>add to Cart</span></div>
    </div>
  </div>
  )
}

export default Card