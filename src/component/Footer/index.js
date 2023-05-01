import React from 'react'
import './style.scss'
import send from '../../assets/images/send-message.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-wraper'>
        <div className='footer-text'>
           <h1>SMART STYLING.
            <br/>
            EXTRA COMFORT.
           </h1>
        </div>
        <div className='send-mail'>
            <h4>Send Mail</h4>
            <input placeholder='Enter your email'/>
            <img src={send} alt='pic' width='30px' height={'auto'}/>
        </div>
        </div>
    </div>
  )
}

export default Footer