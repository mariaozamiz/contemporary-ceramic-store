import React from 'react';
import './menu-item.scss';

function MenuItem({ title }) {
    return (
        <div className="menu-item">
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">shop now</span>
            </div>
        </div>
    );
}

export default MenuItem;
