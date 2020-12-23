import React from 'react';
import { connect } from 'react-redux';
import Button from '../button/Button.js';
import CartItem from '../cart-item/Cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import './cart-dropdown.scss';

function CartDropdown({ cartItems, history }) {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <span className="empty-message">Your cart is empty</span>
                )}
            </div>
            <Button onClick={() => history.push('/checkout')}>
                GO TO CHECKOUT
            </Button>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
