import React from 'react';
import Button from '../button/Button.js';
import './cart-dropdown.scss';

function CartDropdown() {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                <Button>GO TO CHECKOUT</Button>
            </div>
        </div>
    );
}

export default CartDropdown;
