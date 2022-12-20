import './AboutServicesItem.scss';
import React from 'react';
import { BorderRight } from 'react-bootstrap-icons';

interface IProps {
    imgSrc: string;
    title: string;
    border: string;
  }

  export default function AboutServicesItem(props: IProps) {
    const { imgSrc, title, border } = props;
    return (
      <div className="Services-item" style={{ borderRight: `${border}`}}>
        <div className="ServicesItem-img">
          <img src={imgSrc} alt="Delivery"/>
        </div>
        <div className="ServicesItem-content">
          <p>{title}</p>
        </div>
      </div>
    );
  }
  