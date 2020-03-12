import React from 'react';
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/original.svg'

import './header.style.scss'

const Header = () => (
    <div className="header">
        <Link className='logo-container' to='/'>
            <Logo className='Logo' />
        </Link>
        <div className="options">
            <Link className='option'>SHOP</Link>
            <Link className='option'>CONTACT</Link>
        </div>
    </div>
)

export default Header