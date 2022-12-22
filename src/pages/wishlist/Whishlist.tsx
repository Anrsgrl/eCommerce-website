import Banner from '../../components/banner/Banner';
import React from 'react';
import bannerBg from '../../assets/images/bannerBg.jpg';

export default function Whishlist() {
  return <Banner title="Whishlist" pageName="Whishlist" coverPhoto={bannerBg} sliderExist={false} />;
}
