import React from 'react'
import { Link } from 'react-router-dom';
import './header.scss';
import logo from './logo.png';

function Header(){
    return(
        <header>
            <div className="header-container">
                <div className="logo-field">
                    <div className="header-logo">
                        <Link to="/" className='logo-link'>
                            <img src={logo} alt="Our logo" />
                        </Link>
                    </div>
                </div>
                <div className="header-navbar">
                    <ul className='navbar-menu'>
                        <li className='menu-item'>
                            <Link to="/" className='menu-item-href'>
                                Home
                            </Link>
                        </li>
                        <li className='menu-item'>
                            <Link to="/" className='menu-item-href'>
                                Shop
                            </Link>
                        </li>
                        <li className='menu-item'>
                            <Link to="/" className='menu-item-href'>
                                Contact
                            </Link>
                        </li>
                        <li className='menu-item'>
                            <Link to="/" className='menu-item-href'>
                                About
                            </Link>
                        </li>
                        <li className='menu-item'>
                            <Link to="/" className='menu-item-href'>
                                Pages
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="header-icons">

                </div>
            </div>
        </header>
    )
}


export default Header