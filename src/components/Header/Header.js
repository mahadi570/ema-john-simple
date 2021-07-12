import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
            <div className="search-bar">
                <input type="search" name="search" placeholder="Search your goods" id="" />
            </div>
        </div>
    );
};

export default Header;