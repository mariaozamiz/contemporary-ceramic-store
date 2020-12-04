import React from 'react';
import './cart-item.scss';

function CartItem({ item: { imageUrl, price, title, quantity } }) {
    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
            <div className="item-details">
                <span className="name">{title}</span>
                <span className="price">
                    {quantity} x {price}€
                </span>
            </div>
        </div>
    );
}

export default CartItem;
