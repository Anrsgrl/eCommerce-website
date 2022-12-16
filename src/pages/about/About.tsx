import '../about/about.scss';
import Banner from '../../components/banner/Banner';
import React from 'react';
import Props1 from './Props1';

export default function About() {
  return (
    <>
    <section className="About">
      <Banner
        title="About"
        pageName="About"
        coverPhoto="https://casona.familab.net/wp-content/uploads/2021/08/blog-bgf.jpg"
        sliderExist={false} />
    </section>
    <section className='second-part'>
      <div className='container'>
        <div id='image1'>
          <img src="https://casona.familab.net/wp-content/uploads/2021/08/blog-1.jpg" alt='img1' width="1400"/>
        </div>    
        <div id='text1'>
          <span>Handcrafted by Casona</span>
          <p>Casona is a contemporary lifestyle platform connecting artists, designers, influencers and customers in a personalised and content-rich environment. Meets our strict criteria of quality materials, craftsmanship and originality.</p>
        </div>
        <div id='text2'>
          <a id='button1' href="https://disk.yandex.ru/d/gr-P0I9JaViLCw">
            <span>Learn more</span>
          </a>
        </div>
      </div>
    </section>
    <section className='third-part'>

    </section>

    </>
  );
}
