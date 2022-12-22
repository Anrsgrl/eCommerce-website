import './CartAsideElements.scss';
import React from 'react';
import bowl from '../../assets/images/bowl.jpg';

const CartAsideElements = () => {
  return (
    <li className="listOfCarts">
      <div className="list-img">
        <img src={bowl} alt="bowl" />
      </div>
      <div className="list-content">
        <p>Keny Bowl</p>
        <p>QTY: 2</p>
        <p>$25.00</p>
      </div>
    </li>
  );
};

export default CartAsideElements;
