import './CartAside.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';
import { closeCart } from '../header/headerAsideSlice';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import bowl from '../../assets/images/bowl.jpg';
import rightArrow from '../../assets/images/rightArrow.svg';
import shoppingbag from '../../assets/images/shoppingbagx.svg';

export default function CartAside() {
  const asideOpener = useSelector((state: RootState) => state.asideOpener);
  const dispatch = useDispatch();

  const closeCartAside = () => dispatch(closeCart());

  return (
    <aside className={asideOpener.isCartOpen ? 'cart-aside-field cart-aside-open' : 'cart-aside-field'}>
      <div className="cart-aside-part">
        <div className="cart-aside-header">
          <h3>SHOPPING CART</h3>
          <button className="x-button cart-aside-x" onClick={closeCartAside}>
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
          <div className="content-bottom">
            <div className="cart-aside-content-price">
              <p className="cart-aside-content-priceTitle">Subtotal:</p>
              <p className="cart-aside-content-priceText">$200.00</p>
            </div>
            <div className="cart-aside-content-buttons">
              <Link to={'/checkout'}>Checkout</Link>
              <Link to={'/cart'}>View Cart</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="cart-aside-empty">
        <div className="cart-empty-content">
          <div className="empty-aside-img">
            <img src={shoppingbag} alt="shoppingbag" />
          </div>
          <p>Your cart is empty!</p>
          <Link to={'/shop'}>
            <button onClick={closeCartAside}>
              Go to shop <img src={rightArrow} alt="rightArrow" />
            </button>
          </Link>
        </div>
      </div>
    </aside>
  );
}
