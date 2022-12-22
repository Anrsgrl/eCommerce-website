import './HandcraftedItem.scss';
import { Link } from 'react-router-dom';
import React from 'react';

interface IElement {
  imgSrc: string;
  title: string;
  text: string;
  imgPad: string;
}
export default function HandcraftedItem(props: IElement) {
  const { imgSrc, title, text, imgPad } = props;
  return (
    <div className="Handcrafted-card" style={{ padding: `${imgPad}` }}>
      <div className="image">
        <Link to={'/shop'}>
          <img src={imgSrc} alt="shop" />
        </Link>
      </div>
      <div className="text">
        <span>{title}</span>
        <p>{text}</p>
      </div>
    </div>
  );
}
