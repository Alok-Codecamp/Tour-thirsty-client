import React from 'react';
import facebook from '../../../image/icon/facebook-tile.svg'
import tripadvisor from '../../../image/icon/tripadvisor-icon.svg'
import twitter from '../../../image/icon/twitter-tile.svg'
import linkedin from '../../../image/icon/linkedin-tile.svg'
import insta from '../../../image/icon/instagram-tile.svg'
import youtube from '../../../image/icon/youtube-tile.svg'
import whatsapp from '../../../image/icon/whatsapp-tile.svg'
import './Footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer-container">
            <div className="contact">
                <div className="email">
                     <div className="info">
                     <h3>Email</h3>   
                     <p></p>
                     </div>
                </div>
                <div className="call-us">
                    <div className="info">
                        <h3>Call Us</h3>
                        <p></p>
                    </div>
                </div>
                <div className="location">
                <h3>Address</h3>
                <p></p>
                </div>

            </div>
            <div className="social-media">
                    <a href="https://web.facebook.com/"><img src={facebook} alt="" /></a>
                    <a href="https://www.linkedin.com/"><img src={linkedin} alt="" /></a>
                    <a href="https://twitter.com/home"><img src={twitter} alt="" /></a>
                    <a href="https://www.tripadvisor.com/"><img src={tripadvisor} alt="" /></a>
                    <a href="https://www.instagram.com/"><img src={insta} alt="" /></a>
                    <a href="https://www.youtube.com/"><img src={youtube} alt="" /></a>
                    <a href="https://www.whatsapp.com/"><img src={whatsapp} alt="" /></a>
                    
            </div>
                    
            
        </div>
    );
};

export default Footer;