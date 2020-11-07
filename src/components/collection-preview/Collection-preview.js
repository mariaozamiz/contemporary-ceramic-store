import React from 'react';
import './collection-preview.scss';
import CollectionItem from '../collection-item/Collection-item';

function CollectionPreview({ title, items }) {
    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items
                    .filter((item, i) => i < 4)
                    .map((item) => (
                        <CollectionItem
                            key={item.id}
                            title={item.title}
                            author={item.author}
                            price={item.price}
                            imageUrl={item.imageUrl}
                            authorUrl={item.authorUrl}
                        />
                    ))}
            </div>
        </div>
    );
}

export default CollectionPreview;
