import './DailyEssentialsItem.scss';
import { Link } from 'react-router-dom';
import React from 'react';
import daily1 from '../../../../assets/images/daily1.jpg';

// interface IProps {
//   isOpen: boolean;
//   handleClose: () => void;
// }
// props: IProps

function DailyEssentialsItem() {
  return (
    <div className="DailyEssentialsItem">
      <img src={daily1} alt="daily1" />
      <div className="DailyEssentialsItemContent">
        <div className="DailyProductContent">
          <p className="DailyProductName">Backpacks</p>
          <p className="DailyProductTitle">Daily Essentials</p>
          <div className="DailyProductExplore">
            <Link to={'/shop'}>Explore all</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyEssentialsItem;
