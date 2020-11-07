import React from 'react';
import './collection-item.scss';

function CollectionItem({ id, title, author, price, imageUrl, authorUrl }) {
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
                <span className="price">{price}</span>
            </div>
        </div>
    );
}

export default CollectionItem;
