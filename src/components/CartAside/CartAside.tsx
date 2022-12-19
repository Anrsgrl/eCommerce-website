import './CartAside.scss';
import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import bowl from '../../assets/images/bowl.jpg';

export default function CartAside() {
  return (
    <aside className="CartAside-field">
        <div className="CartAside-part">
          <div className="CartAside-header">
            <h3>SHOPPING CART</h3>
            <button className="x-button CartAside-x">
              <span className="sidebar-button-text">
                <AiOutlineClose className="button-x formobileicon" />
                <span className="button-title">Close</span>
              </span>
            </button>
          </div>
          <div className="CartAside-content">
            <ul>
                <li>
                    <div className="list-img">
                        <img src={bowl} alt="bowl" />
                    </div>
                    <div className="list-content">
                        <p>Keny Bowl</p>
                        <p>QTY: 2</p>
                        <p>$25.00</p>
                    </div>
                </li>
            </ul>
            <div className="CartAside-content-price">
                <p className="CartAside-content-priceTitle">Subtotal:</p>
                <p className="CartAside-content-priceText">$200.00</p>
            </div>
            <div className="CartAside-content-buttons">
                <Link to={'/checkout'}>
                    Checkout
                </Link>
                <Link to={'/cart'}>
                    View Cart
                </Link>
            </div>
          </div>
        </div>
        <div className="CartAside-empty"></div>
    </aside>
  );
}
