import React from 'react';
import './checkout-item.scss';

function CheckoutItem({ cartItem: { title, imageUrl, price, quantity } }) {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{title}</span>
            <span className="quantity">{quantity}</span>
            <span className="price">{price}</span>
            <div className="remove-button">&#10005;</div>
        </div>
    );
}

export default CheckoutItem;
