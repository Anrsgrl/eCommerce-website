import '../about/about.scss';
import Banner from '../../components/banner/Banner';
import React from 'react';
import Handcrafted from './components/Handcrafted/Handcrafted';

export default function About() {
  return (
    <>
      <Banner
          title="About" 
          pageName="About"
          coverPhoto="https://casona.familab.net/wp-content/uploads/2021/08/blog-bgf.jpg"
          sliderExist={false} />
      <Handcrafted />
    </>
  );
}
