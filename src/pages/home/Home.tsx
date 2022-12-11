import './home.scss';
import HomeSlider from './components/slider/HomeSlider';
import React from 'react';

export default function Home() {
  return (
    <>
      <div className="home-slider-field">
        <HomeSlider />
      </div>
      <div className="bg"></div>
      <div className="bg"></div>
    </>
  );
}
