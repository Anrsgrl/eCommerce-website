import './header.scss';
import { Link } from 'react-router-dom';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import React, { useState } from 'react';
import hamburger from '../../assets/images/hamburgerMenu.svg';
import icon1 from '../../assets/images/WhiteSearch.svg';
import icon2 from '../../assets/images/WhiteAccount.svg';
import icon3 from '../../assets/images/WhiteCart.svg';
import logo from '../../assets/images/WhiteLogo.svg';

function Header() {
  //color
  const [color, setColor] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleOpenDrawer = () => {
    setIsDrawerOpen(true);
  };
  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  const changeColor = () => {
    if (window.scrollY >= 96) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener('scroll', changeColor);

  const linkClassName = color ? 'menu-item-href' : '';
  const linkIconClassName = color ? 'scroll-fill' : '';

  return (
    <>
      <header className={color ? 'scroll-bg mobile' : ' mobile'}>
        <div className="header-container">
          <div className="hamburger-menu">
            <button className="hamburger-button" onClick={handleOpenDrawer}>
              <img src={hamburger} alt="hamburger" />
            </button>
          </div>
          <div className="logo-field">
            <div className="header-logo">
              <Link to="/">
                <img
                  src={logo}
                  alt="Our logo"
                  className={color ? 'scroll-fill logo-image img-responsive ' : 'logo-image img-responsive'}
                />
              </Link>
            </div>
          </div>
          <div className="header-navbar">
            <ul className="navbar-menu">
              <li className="menu-item">
                <Link to="/" className={linkClassName}>
                  Home
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/shop" className={linkClassName}>
                  Shop
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/contact" className={linkClassName}>
                  Contact
                </Link>
              </li>
              <li className="menu-item pages-menu">
                <Link to="/" className={linkClassName}>
                  Pages
                </Link>
                <ul className="sub-menu">
                  <li className="sub-item">
                    <Link to="/checkout" className="menu-item-href">
                      Checkout
                    </Link>
                  </li>
                  <li className="sub-item">
                    <Link to="/ordertracking" className="menu-item-href">
                      Order Tracking
                    </Link>
                  </li>
                  <li className="sub-item">
                    <Link to="/wishlist" className="menu-item-href">
                      Wishlist
                    </Link>
                  </li>
                  <li className="sub-item">
                    <Link to="/cart" className="menu-item-href">
                      Cart
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <Link to="/about" className={linkClassName}>
                  About
                </Link>
              </li>
            </ul>
          </div>
          <div className="header-icons">
            <button className="icons-element icons-search search-btn">
              <img src={icon1} alt="Search" className={linkIconClassName} />
            </button>
            <button className="icons-element icons-account">
              <Link to="/" className="account-btn">
                <img src={icon2} alt="Account" className={linkIconClassName} />
              </Link>
            </button>
            <button className="icons-element icons-cart Cart-btn">
              <img src={icon3} alt="Cart" className={linkIconClassName} />
            </button>
          </div>
        </div>
      </header>
      <HeaderMenu isOpen={isDrawerOpen} handleClose={handleCloseDrawer} />
    </>
  );
}
// how to click outside box react
// https://codepen.io/sosuke/pen/Pjoqqp
// close hover when clicktt config

export default Header;
