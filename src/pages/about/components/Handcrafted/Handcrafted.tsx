import './Handcrafted.scss';
import React from 'react';
import HandcraftedItem from '../HandcraftedItem/HandcraftedItem';
import { Link } from 'react-router-dom';

export default function Handcrafted() {
  return (
    <div className="Handcrafted-field">
      <div className="Handcrafted-container">
        <div className="Handcrafted-content">
          <div className="Handcrafted-content-title"> 
            <div className="Handcrafted-content-text1">
              <span>Handcrafted by Casona</span>
              <p>Casona is a contemporary lifestyle platform connecting artists, designers, influencers and customers in a personalised and content-rich environment. Meets our strict criteria of quality materials, craftsmanship and originality.</p>
            </div>
            <div className="Handcrafted-content-text2">
              <Link to="/about"><span>Learn more</span></Link>
            </div>
          </div>
          <div className="Handcrafted-content-cards">
            <HandcraftedItem
              imgSrc='https://casona.familab.net/wp-content/uploads/2021/09/about1.jpg'
              title='Minimal & Unique'
              text='Uniquely re-engineer market-driven relationships through pandemic results. Holisticly visualize fully researched methods of empowerment and competitive benefits.'
              flexStyle={'flex-start'}
            />
            <HandcraftedItem
              imgSrc='https://casona.familab.net/wp-content/uploads/2021/09/about3.jpg'
              title='Enhance Collaboration'
              text='Completely deploy just in time e-markets without top-line systems. Professionally grow parallel ROI before functional leadership. Distinctively evolve multifunctional processes for business infomediaries. Globally reinvent resource-leveling infrastructures for orthogonal outsourcing.'
              flexStyle={'flex-end'}
            />
          </div>
        </div>  
      </div>
    </div>
  );
};