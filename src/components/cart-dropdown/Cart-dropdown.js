import React from 'react';
import { connect } from 'react-redux';
import Button from '../button/Button.js';
import CartItem from '../cart-item/Cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import './cart-dropdown.scss';

function CartDropdown({ cartItems }) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map((cartItem) => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))}
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
