import React from 'react';
import Button from '../button/Button';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import './collection-item.scss';

function CollectionItem({ item, addItem }) {
    const { title, price, imageUrl, author, authorUrl } = item;
    return (
        <div className="collection-item">
            <div
                className="image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>
            <div className="collection-footer">
                <div className="name-and-author">
                    <span className="name">{title}</span>
                    <a
                        href={authorUrl}
                        target="blank"
                        rel="shoutout"
                        className="author"
                    >{` by ${author}`}</a>
                </div>
                <span className="price">{`${price}€`}</span>
            </div>
            <Button
                onClick={() => addItem(item)}
                inverted
                className="custom-button"
            >
                Add to cart
            </Button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
