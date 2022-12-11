import './HeaderMenu.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import rightArrow from '../../assets/images/rightArrow.svg';
import x from '../../assets/images/Xblack.svg';

interface IProps {
  isOpen: boolean;
  handleClose: () => void;
}

function HeaderMenu(props: IProps) {
  const { isOpen, handleClose } = props;
  const [toggle, setToggle] = useState(false);

  return (
    <aside className={isOpen ? 'canvas-normal is-open' : 'canvas-normal'}>
      <div className="offcanvas-content">
        <div className="mobile-header-screen-inner">
          <div className="mobile-header-title">
            <h3>Menu</h3>
            <button className="x-button" onClick={handleClose}>
              <span className="sidebar-button-text">
                <img src={x} alt="x" className="button-x formobileicon" />
                <span className="button-title">Close</span>
              </span>
            </button>
          </div>
          <div className="mobile-navigation default-nav-menu">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <button className="pages-part pages-button" onClick={() => setToggle(!toggle)}>
                  <Link to="/">Pages</Link>
                  <Link to="/">
                    <span className={toggle ? 'toggle-icon flip' : 'toggle-icon'}>
                      <img src={rightArrow} alt="right" />
                    </span>
                  </Link>
                </button>
                {toggle && (
                  <ul className="sub-menu">
                    <li>
                      <Link to="/checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link to="/ordertracking">Order Tracking</Link>
                    </li>
                    <li>
                      <Link to="/wishlist">Wishlist</Link>
                    </li>
                    <li>
                      <Link to="/cart">Cart</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default HeaderMenu;
