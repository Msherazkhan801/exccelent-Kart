import React from 'react'
import VideoPlayer from "react-background-video-player";
import Button from "../../component/Button/index"
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/shopping-cart.png'
import './Style.scss'
const Home = () => {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/men')

  }
  return (
  <div className="App">
    <VideoPlayer
      className="video"
      src={
        "https://player.vimeo.com/external/435674703.sd.mp4?s=01ad1ba21dc72c1d34728e1b77983805b34daad7&profile_id=165&oauth2_token_id=57447761"
      }
      autoPlay={true}
      muted={true}
    />
    <div className="mainInput">
      <img src={logo} alt='logo' width={'100px'} height='100px'/>
      <Button
        text='Lets Start'
        handleClick={handleClick}
        className='btn-start'

      />
    </div>
  </div>
  )
}

export default Home