import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './navbar.css';

import logo from '../assets/logo.png';  
import cart from '../assets/cart.png';  

const Navbar = () => {
    const [menu, setmenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="Freebandz Logo" className='nav-logo-img' />
                <p className='logo-text'>FREEBANDZ</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setmenu("shop") }}>
                    <Link style={{textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : null}
                </li>
                <li onClick={() => { setmenu("samsung") }}>
                    <Link style={{textDecoration: 'none' }} to='/samsung'>Samsung</Link>{menu === "samsung" ? <hr /> : null}
                </li>
                <li onClick={() => { setmenu("iphone") }}>
                    <Link style={{textDecoration: 'none' }} to='/iphone'>iPhone</Link>{menu === "iphone" ? <hr /> : null}
                </li>
                <li onClick={() => { setmenu("pixel") }}>
                    <Link style={{textDecoration: 'none' }} to='/pixel'>Pixel</Link>{menu === "pixel" ? <hr /> : null}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart} alt="Cart" className="cart-icon" /></Link>
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
};

export default Navbar;
