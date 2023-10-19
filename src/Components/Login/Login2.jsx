import React from 'react'
import './Login2.css'
import { loginVdeo } from '../../Constants/Constants'

function Login2() {
  return (
    <div className='wrapper'>
        <div className="headContainer">
      <h1 className='log2Head'>Enjoy on your TV</h1>
      <p className='log2SubHead'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
    </div>
    <div className="login2Img">
    <video className='vdeo' autoPlay loop muted controls={false} width="815" height="330">
        <source src={loginVdeo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <img className='television' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png' alt='Tv'/>
    </div>
    </div>
  )
}

export default Login2
