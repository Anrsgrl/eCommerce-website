import './AboutServices.scss';
import React from 'react';
import AboutServicesItem from '../AboutServicesItem/AboutServicesItem';
import { Link } from 'react-router-dom';
export default function AboutServices() {
    return (
      <div className="AServices-field">
        <div className="AServices-title">
          <span>Reasons to shop with us</span>
        <div className="AServices-items">
          <AboutServicesItem
            imgSrc='sd'
            title='Fast national & international delivery'
            border='1px solid #FFFFFF75'
          />
          <AboutServicesItem
            imgSrc='sd'
            title='Secure Checkout our partners'
            border='1px solid #FFFFFF75'
          />
          <AboutServicesItem
            imgSrc='sd'
            title='Fast and free Customer support'
            border='0px'
          />
        </div>
        </div>
      </div>
    );
  }