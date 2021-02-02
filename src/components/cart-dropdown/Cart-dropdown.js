import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import CartItem from '../cart-item/Cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {
    CartDropdownButton,
    CartDropdownContainer,
    EmptyMessageContainer,
    CartItemsContainer,
} from './cart-dropdown.styles.jsx';

function CartDropdown({ cartItems, history, dispatch }) {
    return (
        <CartDropdownContainer>
            <CartItemsContainer>
                {cartItems.length ? (
                    cartItems.map((cartItem) => (
                        <CartItem key={cartItem.id} item={cartItem} />
                    ))
                ) : (
                    <EmptyMessageContainer>
                        Your cart is empty
                    </EmptyMessageContainer>
                )}
            </CartItemsContainer>
            <CartDropdownButton
                onClick={() => {
                    history.push('/checkout');
                    dispatch(toggleCartHidden());
                }}
            >
                GO TO CHECKOUT
            </CartDropdownButton>
        </CartDropdownContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
