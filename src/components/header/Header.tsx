import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './header.scss';
import logo from '../../assets/images/WhiteLogo.svg';
import icon1 from '../../assets/images/WhiteSearch.svg'
import icon2 from '../../assets/images/WhiteAccount.svg'
import icon3 from '../../assets/images/WhiteCart.svg'
import hamburger from '../../assets/images/hamburgerMenu.svg'
import x from '../../assets/images/Xblack.svg'
import rightArrow from '../../assets/images/rightArrow.svg'


function Header(this: any){
    //color
    const [color,setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 96){
            setColor(true)
        } else {
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    const [sidebar, setOpen] = useState(false)
    const openSide = () =>{
        setOpen(true)
    }
    const closeSide = () =>{
        setOpen(false)
    }
    const [toggle, setToggle] = useState(false)

    return(
        <>
            <header className={color ? 'scroll-bg mobile' : ' mobile'}>
                <div className="header-container">
                    <div className="hamburger-menu" onClick={openSide}>
                        <Link to="/">
                            <span>
                                <img src={hamburger} alt="hamburger" />
                            </span>
                        </Link>
                    </div>
                    <div className="logo-field">
                        <div className="header-logo">
                            <Link to="/">
                                <img src={logo} alt="Our logo" className={color ? 'scroll-fill logo-image img-responsive ' : 'logo-image img-responsive'} />
                            </Link>
                        </div>
                    </div>
                    <div className="header-navbar">
                        <ul className='navbar-menu'>
                            <li className='menu-item'>
                                <Link to="/" className={color ? 'menu-item-href' : ''}>
                                    Home
                                </Link>
                            </li>
                            <li className='menu-item'>
                                <Link to="/" className={color ? 'menu-item-href' : ''}>
                                    Shop
                                </Link>
                            </li>
                            <li className='menu-item'>
                                <Link to="/" className={color ? 'menu-item-href' : ''}>
                                    Contact
                                </Link>
                            </li>
                            <li className='menu-item pages-menu'>
                                <Link to="/" className={color ? 'menu-item-href' : ''}>
                                    Pages
                                </Link>
                                <ul className='sub-menu'>
                                    <li className='sub-item'>
                                        <Link to="/" className='menu-item-href'>
                                            Checkout
                                        </Link>
                                    </li>
                                    <li className='sub-item'>
                                        <Link to="/" className='menu-item-href'>
                                            Order Tracking
                                        </Link>
                                    </li>
                                    <li className='sub-item'>
                                        <Link to="/" className='menu-item-href'>
                                            Wishlist
                                        </Link>
                                    </li>
                                    <li className='sub-item'>
                                        <Link to="/" className='menu-item-href'>
                                            Cart
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className='menu-item'>
                                <Link to="/" className={color ? 'menu-item-href' : ''}>
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header-icons">
                        <div className="icons-element icons-search">
                            <Link to="/" className='search-btn'>
                                <img src={icon1} alt="Search" className={color ? 'scroll-fill' : ''} />
                            </Link>
                        </div>
                        <div className="icons-element icons-account">
                            <Link to="/" className='account-btn'>
                                <img src={icon2} alt="Account" className={color ? 'scroll-fill' : ''} />
                            </Link>
                        </div>
                        <div className="icons-element icons-cart">
                            <Link to="/" className='Cart-btn'>
                                <img src={icon3} alt="Cart" className={color ? 'scroll-fill' : ''} />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <aside className={sidebar ? 'canvas-normal is-open' : 'canvas-normal'}>
                <div className="offcanvas-content">
                    <div className="mobile-header-screen-inner">
                        <div className="mobile-header-title">
                            <h3>Menu</h3>
                            <button>
                                <span className="sidebar-button-text" onClick={closeSide}>
                                    <img src={x} alt="x" className='button-x'/>
                                    <span className="button-title">Close</span>
                                </span>
                            </button>
                        </div>
                        <div className="mobile-navigation default-nav-menu">
                            <ul>
                                <li>
                                    <Link to='/'>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/'>
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <div className="pages-part" onClick={() => setToggle(!toggle)}>
                                        <Link to='/'>
                                            Pages
                                        </Link>
                                        <Link to='/'>
                                            <span className={toggle ? 'toggle-icon flip' : 'toggle-icon'}>
                                                <img src={rightArrow} alt="right" />
                                            </span>
                                        </Link>
                                    </div>
                                    {toggle && <ul className='sub-menu'>
                                        <li>
                                            <Link to='/'>
                                                Checkout
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                Order Tracking
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                Wishlist
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/'>
                                                Cart
                                            </Link>
                                        </li>
                                    </ul>}
                                </li>
                                <li>
                                    <Link to='/'>
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default Header