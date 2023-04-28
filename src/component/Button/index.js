import React from 'react'
import './style.scss'
const Button = ({
    text='',
    handleClick=null,
    className=null,
    btnWraper=null,
}) => {
  return (
    <div className={btnWraper}>
        <button onClick={handleClick} className={className}>{text}</button>
    </div>
  )
}

export default Button