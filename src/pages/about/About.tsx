import '../about/about.scss';
<<<<<<< HEAD
import Banner from '../../components/banner/Banner';
import React from 'react';
import Handcrafted from './components/Handcrafted/Handcrafted';
=======
import Handcrafted from './components/Handcrafted/Handcrafted';
import React from 'react';
import Banner from '../../components/Banner/Banner';
>>>>>>> 31a2a905c36e38cd377f0412a3130e8c06b33e22
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
