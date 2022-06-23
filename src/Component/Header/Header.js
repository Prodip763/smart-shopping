import React from "react";
import logo from '../../images/favicon.ico';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className="header">
            <img src={logo} alt="" />
            <div>
            <a href="/shop">Shop</a>
            <a href="/orders">Orders</a>
            <a href="/inventory">Inventory</a>
            <a href="/about">About</a>
            </div>
            
        </nav>
        <h2 className='shopping'>Smart-Shopping</h2>
        <h4 className="shopping"><span>Get Your Best Products From Us</span></h4>
        </div>
        
        
    );
};


export default Header;