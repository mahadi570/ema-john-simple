import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product'


const Shop = () => {
    const first10 = fakeData.slice(0,5);
    const [products] = useState(first10);
    return (
        
                <div className="shop-container">
                    <div className="product-container"><h1>This mine Website</h1>
                {
                products.map(pd => <Product product={pd}></Product>)
                }
                
        </div>
                <div className="cart-container">
                    <h3>This is cart.</h3>
                </div>
                
            </div>
    );
};

export default Shop;