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
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </div>
        </div>
    );
}

export default CollectionPreview;
