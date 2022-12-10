import './about.scss';
import Banner from '../../components/banner/Banner';
import React from 'react';

export default function About() {
  return (
    <section className="About">
      <Banner
        title="About"
        pageName="About"
        coverPhoto="https://casona.familab.net/wp-content/uploads/2021/08/blog-bgf.jpg"
        sliderExist={false}
      />
    </section>
  );
}
