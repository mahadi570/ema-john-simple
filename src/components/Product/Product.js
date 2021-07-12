import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const product = (props) => {
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" className="product-img" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                
                <p><small>by: <b>{seller}</b></small></p>
                <p><small><b>$  {price}</b></small></p>
                <p><small>Only<b><i> {stock}</i></b> left in stock. order soon.</small></p>
                <button className='main-button'> <FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default product;