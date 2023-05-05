import React from 'react'
import VideoPlayer from "react-background-video-player";
import Button from "../../component/Button/index"
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/shopping-cart.png'
import './Style.scss'
const Home = () => {

  const navigate = useNavigate()
  const handleClick = (link) => {
    navigate(link)

  }
  return (
  <div className="App">
    <VideoPlayer
      className="video"
      src={
        "https://cdn.shopify.com/videos/c/o/v/43fd4642a60d41a89676c0828fa3ebb8.mp4"
      }
      autoPlay={true}
      muted={true}
    />
    <div className="mainInput">
      <img src={logo} alt='logo' width={'100px'} height='100px'/>
      <Button
        text='MEN'
        handleClick={()=>handleClick("/men")}
        className='btn-start'

      />
      <Button
        text='WOMEN'
        handleClick={()=>handleClick('/women')}
        className='btn-start'

      />
    </div>
  </div>
  )
}

export default Home