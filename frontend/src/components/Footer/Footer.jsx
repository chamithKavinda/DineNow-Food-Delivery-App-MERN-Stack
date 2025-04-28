import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Dine Now is your go-to food delivery app, bringing your favorite meals right to your doorstep. Whether you're craving local flavors or popular dishes, we deliver fast, fresh, and reliably. With a simple interface and quick ordering, satisfying your hunger has never been easier. Enjoy delicious moments—anytime, anywhere.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            {/* <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div> */}
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+94 76 210 6834</li>
                    <li>+94 77 310 6834</li>
                    <li>contact@dinenow.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright 2025  DineNow.com - All rights Reserved
        </p>
    </div>
  )
}

export default Footer
