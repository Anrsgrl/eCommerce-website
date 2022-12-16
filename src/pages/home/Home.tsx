import './home.scss';
import DailyEssentials from './components/DailyEssentials/DailyEssentials';
import Hanpicked from './components/Hanpicked/Hanpicked';
import HomeServices from './components/HomeServices/HomeServices';
import HomeSlider from './components/HomeSlider/HomeSlider';
import HomeSubscribe from './components/HomeSubscribe/HomeSubscribe';
import React from 'react';
import SaleUp from './components/SaleUp/SaleUp';

export default function Home() {
  return (
    <>
      <HomeSlider />
      <DailyEssentials />
      <SaleUp />
      <Hanpicked />
      <HomeServices />
      <HomeSubscribe />
    </>
  );
}
