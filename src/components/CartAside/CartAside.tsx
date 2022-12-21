import './CartAside.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { RootState } from '../../store/store';
import { closeCart } from '../header/headerAsideSlice';
import { useDispatch, useSelector } from 'react-redux';
import CartAsideElements from '../CartAsideElements/CartAsideElements';
import React from 'react';
import rightArrow from '../../assets/images/rightArrow.svg';
import shoppingbag from '../../assets/images/shoppingbagx.svg';
=======
import React from 'react';
import bowl from '../../assets/images/bowl.jpg';
>>>>>>> cf853c78b88495e5da5b2c5208524ad66b7c13a1

export default function CartAside() {
  const asideOpener = useSelector((state: RootState) => state.asideOpener);
  const dispatch = useDispatch();

  const closeCartAside = () => dispatch(closeCart());

  return (
<<<<<<< HEAD
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
            <CartAsideElements />
          </ul>
          <div className="content-bottom">
=======
<<<<<<< HEAD
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
>>>>>>> cf853c78b88495e5da5b2c5208524ad66b7c13a1
            <div className="cart-aside-content-price">
              <p className="cart-aside-content-priceTitle">Subtotal:</p>
              <p className="cart-aside-content-priceText">$200.00</p>
            </div>
            <div className="cart-aside-content-buttons">
              <Link to={'/checkout'}>
                <button>Checkout</button>
              </Link>
              <Link to={'/cart'}>
                <button>View Cart</button>
              </Link>
            </div>
          </div>
        </div>
<<<<<<< HEAD
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
=======
        <div className="cart-aside-empty"></div>
=======
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
            <Link to={'/checkout'}>Checkout</Link>
            <Link to={'/cart'}>View Cart</Link>
          </div>
        </div>
      </div>
      <div className="CartAside-empty"></div>
>>>>>>> 36148452a857b167a97d3c30647b523b09469174
>>>>>>> cf853c78b88495e5da5b2c5208524ad66b7c13a1
    </aside>
  );
}
