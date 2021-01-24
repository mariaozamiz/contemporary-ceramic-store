import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.scss';

function MenuItem({ title, imageUrl, imageSize, history, linkUrl, match }) {
    return (
        <div
            className={`${imageSize} menu-item`}
            onClick={() => history.push(`${match.url}${linkUrl}`)}
        >
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
        // <Link
        //     to={`/${title}`}
        //     style={{
        //         textDecoration: 'none',
        //         color: 'inherit',
        //     }}
        //     className={`${imageSize} menu-item`}
        // >
        //     <div
        //         className={`${imageSize} menu-item`}
        //         style={{ backgroundImage: `url(${imageUrl})` }}
        //     >
        //         <div className="content">
        //             <h1 className="title">{title}</h1>
        //             <span className="subtitle">shop now</span>
        //         </div>
        //     </div>
        // </Link>
    );
}

export default withRouter(MenuItem);
