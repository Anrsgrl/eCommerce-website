import './header.scss';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import hamburger from '../../assets/images/hamburgerMenu.svg';
import icon1 from '../../assets/images/WhiteSearch.svg';
import icon2 from '../../assets/images/WhiteAccount.svg';
import icon3 from '../../assets/images/WhiteCart.svg';
import logo from '../../assets/images/WhiteLogo.svg';
import rightArrow from '../../assets/images/rightArrow.svg';
import x from '../../assets/images/Xblack.svg';

function Header() {
  //color
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 96) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener('scroll', changeColor);
  const [sidebar, setOpen] = useState(false);
  const openSide = () => {
    setOpen(true);
  };
  const closeSide = () => {
    setOpen(false);
  };
  const [toggle, setToggle] = useState(false);

  const linkClassName = color ? 'menu-item-href' : '';
  const linkIconClassName = color ? 'scroll-fill' : '';

  return (
    <>
      <header className={color ? 'scroll-bg mobile' : ' mobile'}>
        <div className="header-container">
          <div className="hamburger-menu">
            <Link to="/">
              <button className="hamburger-button" onClick={openSide}>
                <img src={hamburger} alt="hamburger" />
              </button>
            </Link>
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
            <button className="icons-element icons-search">
              <Link to="/" className="search-btn">
                <img src={icon1} alt="Search" className={linkIconClassName} />
              </Link>
            </button>
            <button className="icons-element icons-account">
              <Link to="/" className="account-btn">
                <img src={icon2} alt="Account" className={linkIconClassName} />
              </Link>
            </button>
            <button className="icons-element icons-cart">
              <Link to="/" className="Cart-btn">
                <img src={icon3} alt="Cart" className={linkIconClassName} />
              </Link>
            </button>
          </div>
        </div>
      </header>
      <aside className={sidebar ? 'canvas-normal is-open' : 'canvas-normal'}>
        <div className="offcanvas-content">
          <div className="mobile-header-screen-inner">
            <div className="mobile-header-title">
              <h3>Menu</h3>
              <button className="x-button" onClick={closeSide}>
                <span className="sidebar-button-text">
                  <img src={x} alt="x" className="button-x" />
                  <span className="button-title">Close</span>
                </span>
              </button>
            </div>
            <div className="mobile-navigation default-nav-menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">Shop</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
                <li>
                  <button className="pages-part" onClick={() => setToggle(!toggle)}>
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
                        <Link to="/">Checkout</Link>
                      </li>
                      <li>
                        <Link to="/">Order Tracking</Link>
                      </li>
                      <li>
                        <Link to="/">Wishlist</Link>
                      </li>
                      <li>
                        <Link to="/">Cart</Link>
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
    </>
  );
}

export default Header;
