import './Handcrafted.scss';
import React from 'react';
import HandcraftedItem from '../HandcraftedItem/HandcraftedItem';

export default function Handcrafted() {
  return (
    <div className="Handcrafted-field">
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
        <HandcraftedItem
          link='https://casona.familab.net/wp-content/uploads/2021/09/about1.jpg'
          title='Minimal & Unique'
          text='Uniquely re-engineer market-driven relationships through pandemic results. Holisticly visualize fully researched methods of empowerment and competitive benefits.'
         />
    </div>
  );
};