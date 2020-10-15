import React from 'react';
import { Link } from 'react-router-dom';
import './menu-item.scss';

function MenuItem({ title, imageUrl, imageSize }) {
    return (
        <Link
            to={`/${title}`}
            style={{
                textDecoration: 'none',
                color: 'inherit',
            }}
            className={`${imageSize} menu-item`}
        >
            <div
                className={`${imageSize} menu-item`}
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <span className="subtitle">shop now</span>
                </div>
            </div>
        </Link>
    );
}

export default MenuItem;
