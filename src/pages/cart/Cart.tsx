import Banner from '../../components/banner/Banner';
import React from 'react';
import bannerBg from '../../assets/images/bannerBg.jpg';


export default function Cart() {
  return <Banner title="Whishlist" pageName="Whishlist" coverPhoto={bannerBg} sliderExist={false} />;
}
