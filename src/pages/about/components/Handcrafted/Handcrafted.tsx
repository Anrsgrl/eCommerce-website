import './Handcrafted.scss';
import React from 'react';
import HandcraftedItem from '../HandcraftedItem/HandcraftedItem';
import { Link } from 'react-router-dom';

export default function Handcrafted() {
  return (
    <div className="Handcrafted-field">
      <div className='Handcrafted-container'>
        <div id='image1'>
          <img src="https://casona.familab.net/wp-content/uploads/2021/08/blog-1.jpg" alt='img1' width="1400"/>
        </div>    
        <div id='text1'>
          <span>Handcrafted by Casona</span>
          <p>Casona is a contemporary lifestyle platform connecting artists, designers, influencers and customers in a personalised and content-rich environment. Meets our strict criteria of quality materials, craftsmanship and originality.</p>
        </div>
        <div id='text2'>
          <Link to="/about"><span>Learn more</span></Link>
        </div>
      </div>
      <div className="Handcrafted-card-content">
        <HandcraftedItem
          imgSrc='https://casona.familab.net/wp-content/uploads/2021/09/about1.jpg'
          title='Minimal & Unique'
          text='Uniquely re-engineer market-driven relationships through pandemic results. Holisticly visualize fully researched methods of empowerment and competitive benefits.'
          imgPad={'15px 100px 15px 15px'}
         />
         <HandcraftedItem
          imgSrc='https://casona.familab.net/wp-content/uploads/2021/09/about3.jpg'
          title='Enhance Collaboration'
          text='Completely deploy just in time e-markets without top-line systems. Professionally grow parallel ROI before functional leadership. Distinctively evolve multifunctional processes for business infomediaries. Globally reinvent resource-leveling infrastructures for orthogonal outsourcing.'
          imgPad={'200px 30px 15px 85px'}
         />
      </div>
    </div>
  );
};