import React from 'react';
import './homepage.scss';
import DirectoryMenu from '../../components/directory-menu/Directory-menu';

function Homepage() {
    return (
        <div className="homepage">
            <DirectoryMenu />
        </div>
    );
}

export default Homepage;
