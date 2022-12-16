import './home.scss';
import DailyEssentials from './components/DailyEssentials/DailyEssentials';
import HomeSlider from './components/HomeSlider/HomeSlider';
import React from 'react';

export default function Home() {
  return (
    <>
      <HomeSlider />
      <DailyEssentials />
      <div className="bg"></div>
      <div className="bg"></div>
    </>
  );
}
