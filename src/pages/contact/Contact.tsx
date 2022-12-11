
import "./contact.scss";
import logo from './logo.png';
import email from './email.png';
import location from './location.png';
import React from "react";


export default function Contact() {
    return (
        <div>
            <div className='three-divs'>
                <div className='contact-box'>
                    <img src={logo} alt="phone" />
                    <p className='phone'>Phone</p>
                    <p className='call'>Call us: 0333 015 0000</p>
                </div>
                <div className='contact-box'>
                    <img src={location} alt="location" />
                    <p className='phone'>Live chat</p>
                    <p className='call'>Click here to launch live chat</p>
                </div>
                <div className='contact-box'>
                    <img src={email} alt="email" />
                    <p className='phone'>Email</p>
                    <p className='call'>Email us at: contact@familab.net</p>
                </div>
            </div>
        </div>
    );
}