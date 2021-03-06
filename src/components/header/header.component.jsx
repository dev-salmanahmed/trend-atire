import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/logo.svg';
import { auth } from '../../firebase/firebase.utils';


const Header = ({ currentUser }) => (
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
            {
                currentUser ? 
                <div className='option cursor-pointer' onClick={() => auth.signOut() } >
                    Sign Out
                </div>
            :
            <Link className='option' to='/signin'>
                Sign In
            </Link>
            }
            
        </div>
    
    </div>
);
export default Header;