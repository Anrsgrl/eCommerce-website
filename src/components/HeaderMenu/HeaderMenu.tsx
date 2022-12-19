import './HeaderMenu.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import rightArrow from '../../assets/images/rightArrow.svg';

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
                <AiOutlineClose className="button-x formobileicon" />
                <span className="button-title">Close</span>
              </span>
            </button>
          </div>
          <div className="mobile-navigation default-nav-menu">
            <ul>
              <li>
                <button onClick={handleClose}>
                  <Link to="/">Home</Link>
                </button>
              </li>
              <li>
                <button onClick={handleClose}>
                  <Link to="/shop">Shop</Link>
                </button>
              </li>
              <li>
                <button onClick={handleClose}>
                  <Link to="/contact">Contact</Link>
                </button>
              </li>
              <li>
                <button className="pages-part pages-button" onClick={() => setToggle(!toggle)}>
                  <p>Pages</p>
                  <Link to="/">
                    <span className={toggle ? 'toggle-icon flip' : 'toggle-icon'}>
                      <img src={rightArrow} alt="right" />
                    </span>
                  </Link>
                </button>
                {toggle && (
                  <ul className="sub-menu">
                    <li>
                      <button onClick={handleClose}>
                        <Link to="/checkout">Checkout</Link>
                      </button>
                    </li>
                    <li>
                      <button onClick={handleClose}>
                        <Link to="/ordertracking">Order Tracking</Link>
                      </button>
                    </li>
                    <li>
                      <button onClick={handleClose}>
                        <Link to="/wishlist">Wishlist</Link>
                      </button>
                    </li>
                    <li>
                      <button onClick={handleClose}>
                        <Link to="/cart">Cart</Link>
                      </button>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <button onClick={handleClose}>
                  <Link to="/about">About</Link>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default HeaderMenu;
