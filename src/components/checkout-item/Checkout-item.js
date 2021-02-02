import React from 'react';
import { connect } from 'react-redux';
import {
    clearItemFromCart,
    addItem,
    removeItem,
} from '../../redux/cart/cart.actions';
import {
    CheckoutItemContainer,
    ImageContainer,
    TextContainer,
    QuantityContainer,
    PriceContainer,
    RemoveButtonContainer,
} from './checkout-item.styles';

function CheckoutItem({ cartItem, clearItem, addItem, removeItem }) {
    const { title, imageUrl, price, quantity } = cartItem;
    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt="item" />
            </ImageContainer>
            <TextContainer>{title}</TextContainer>
            <QuantityContainer>
                <div onClick={() => removeItem(cartItem)}>&#10094;</div>
                <span>{quantity}</span>
                <div onClick={() => addItem(cartItem)}>&#10095;</div>
            </QuantityContainer>
            <PriceContainer>{price}€</PriceContainer>
            <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
                &#10005;
            </RemoveButtonContainer>
        </CheckoutItemContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
    clearItem: (item) => dispatch(clearItemFromCart(item)),
    addItem: (item) => dispatch(addItem(item)),
    removeItem: (item) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
