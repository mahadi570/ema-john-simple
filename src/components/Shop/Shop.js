import React, { useState } from 'react';
import fakeData from '../../fakeData'
import './Shop.css'
import procuct from '../product/procuct';

const Shop = () => {
    const first10 = fakeData.slice(0,15);
    const [products] = useState(first10);
    return (
        
                <div className="shop-container">
                    <div className="product-container"><h1>This mine Website</h1>
            <Product></Product>
            </div>
                <div className="cart-container">
                    <h3>This is cart.</h3>
                </div>
                
            </div>
    );
};

export default Shop;