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
            <div className="contact d-lg-flex d-md-flex justify-content-evently align-items-center">
                <div className="email">
                     <div className="info">
                     <h3>Email</h3>   
                     <p>tourThirsty@gmail.com</p>
                     </div>
                </div>
                <div className="call-us">
                    <div className="info">
                        <h3>Call Us</h3>
                        <p>+902154754</p>
                    </div>
                </div>
                <div className="location w-25">
                <h3>Address</h3>
                <p>Address: Flat No. 6, Shankar Market, 2nd Floor, Above Shop No.1 Shankar Market, Outer Circle, Opposite M Block, Connaught Place, Delhi, 110001, India.</p>
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