import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/logo.svg';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'>
                Shop
            </Link>

            <Link className='option' to='/shop'>
                Contact Us
            </Link>

            <Link className='option' to='/shop'>
                About Us
            </Link>

            <Link className='option' to='/shop'>
                Sign in
            </Link>
        </div>
    
    </div>
);
export default Header;