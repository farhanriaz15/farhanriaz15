import React from 'react'
import './Hero.css'
import IMG_20240310_204650_112 from '../../assets/IMG_20240310_204650_112.svg'
const Hero = () => {
  return (
    <div className='hero'>
      <img src={IMG_20240310_204650_112} alt="" />
      <h1><span>I'm Mohammed Farhan Riaz,</span> frontend developer based in India. </h1>
      <p>I am frontend web developer from mangalore, Karnataka with experience of 5 years</p>
      <div className="hero-action">
        <div className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  )
}

export default Hero