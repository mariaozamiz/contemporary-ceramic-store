import React from 'react';
import {
    CartItemContainer,
    ItemDetailsContainer,
    CartItemImage,
    NameContainer,
} from './cart-item.styles.jsx';

function CartItem({ item: { imageUrl, price, title, quantity } }) {
    return (
        <CartItemContainer>
            <CartItemImage src={imageUrl} alt="item" />
            <CartItemContainer>
                <ItemDetailsContainer>
                    <NameContainer>{title}</NameContainer>
                    {quantity} x {price}€
                </ItemDetailsContainer>
            </CartItemContainer>
        </CartItemContainer>
    );
}

export default CartItem;
