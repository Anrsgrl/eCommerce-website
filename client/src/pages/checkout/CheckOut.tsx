import Banner from '../../components/banner/Banner';
import React from 'react';
import bannerBg from '../../assets/images/bannerBg.jpg';

export default function CheckOut() {
  return <Banner title="CheckOut" pageName="CheckOut" coverPhoto={bannerBg} sliderExist={false} />;
}
