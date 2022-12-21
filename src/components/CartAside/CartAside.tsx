import './CartAside.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import React from 'react';
import bowl from '../../assets/images/bowl.jpg';

export default function CartAside() {
  return (

    <aside className="cart-aside-field">
        <div className="cart-aside-part">
          <div className="cart-aside-header">
            <h3>SHOPPING CART</h3>
            <button className="x-button cart-aside-x">
              <span className="sidebar-button-text">
                <AiOutlineClose className="button-x formobileicon" />
                <span className="button-title">Close</span>
              </span>
            </button>
          </div>
          <div className="cart-aside-content">
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
            <div className="cart-aside-content-price">
                <p className="cart-aside-content-priceTitle">Subtotal:</p>
                <p className="cart-aside-content-priceText">$200.00</p>
            </div>
            <div className="cart-aside-content-buttons">
                <Link to={'/checkout'}>
                    Checkout
                </Link>
                <Link to={'/cart'}>
                    View Cart
                </Link>
            </div>
          </div>
        </div>
        <div className="cart-aside-empty"></div>
      </aside>
  
  );
}
