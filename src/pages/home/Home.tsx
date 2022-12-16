import './home.scss';
import DailyEssentials from './components/DailyEssentials/DailyEssentials';
import HomeSlider from './components/HomeSlider/HomeSlider';
import React from 'react';
import SaleUp from './components/SaleUp/SaleUp';

export default function Home() {
  return (
    <>
      <HomeSlider />
      <DailyEssentials />
      <SaleUp />
      <div className="bg"></div>
      <div className="bg"></div>
    </>
  );
}
