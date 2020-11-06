import React from 'react';
import './collection-preview.scss';

function CollectionPreview({ title, items }) {
    console.log('CollectionPreview -> items', items);

    return (
        <div className="collection-preview">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.map((item) => (
                    <div key={item.id}>{item.title}</div>
                ))}
            </div>
        </div>
    );
}

export default CollectionPreview;
