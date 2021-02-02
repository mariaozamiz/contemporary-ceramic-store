import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer,
} from './collection-item.styles.jsx';

function CollectionItem({ item, addItem }) {
    const { title, price, imageUrl, author, authorUrl } = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></BackgroundImage>
            <CollectionFooterContainer>
                <NameContainer>
                    {title}
                    <a
                        href={authorUrl}
                        target="blank"
                        rel="shoutout"
                        className="author"
                    >{` by ${author}`}</a>
                </NameContainer>
                <PriceContainer>{`${price}€`}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton
                onClick={() => addItem(item)}
                inverted
                className="custom-button"
            >
                Add to cart
            </AddButton>
        </CollectionItemContainer>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
