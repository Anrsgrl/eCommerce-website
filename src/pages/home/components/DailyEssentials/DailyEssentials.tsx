import './DailyEssentials.scss';
import DailyEssentialsItem from '../DailyEssentialsItem/DailyEssentialsItem';
import React from 'react';

function DailyEssentials() {
  return (
    <div className="DailyEssentialsField">
      <div className="DailyEssentialsContainer">
        <div className="DailyEssentialsItems">
          <DailyEssentialsItem />
          <DailyEssentialsItem />
        </div>
      </div>
    </div>
  );
}

export default DailyEssentials;
