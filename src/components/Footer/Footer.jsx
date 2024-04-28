import React from 'react'
import './Footer.css'
import IMG_20240422_234915 from '../../assets/IMG_20240422_234915.svg'
import user_icon from '../../assets/user_icon.svg'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
            <img src={IMG_20240422_234915} alt="" />
            <p>I am a frontend developer from, Mangalore with 5 years of experience in companies like Microsoft,Tesla and Apple.</p>

        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={user_icon} alt="" />
                <input type="email" placeholder='Enter your email' />
            </div>
            
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Mohammed Farhan Riaz. All rights reserved</p>
        <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect With Me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer