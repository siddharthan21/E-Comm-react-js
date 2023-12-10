 import React from 'react'
import './Hero.css'
import arrow_icon from '../assests/arrow.png'
import hand_icon from '../assests/hand_icon.png'
import hero_img from '../assests/hero_image.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEEWW ARRIVLAS ONLLYY</h2>
            <div className="big">
                <div className="hand-hand-icon">
                    <p> . New</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>Collection</p>
                <p>For EveryOne</p>
            </div>
            <div className="hero-latest-btn">
                <div className="">Lastest Collection</div>
                <img src={arrow_icon} alt=""  />
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}

export default Hero
