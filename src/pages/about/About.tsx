import '../about/about.scss';
import Handcrafted from './components/Handcrafted/Handcrafted';
import React from 'react';
import Banner from '../../components/Banner/Banner';
export default function About() {
  return (
    <>
      <Banner
        title="About"
        pageName="About"
        coverPhoto="https://casona.familab.net/wp-content/uploads/2021/08/blog-bgf.jpg"
        sliderExist={false}
      />
      <Handcrafted />
    </>
  );
}
