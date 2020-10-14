import React, { useState } from 'react';
import MenuItem from '../menu-item/Menu-item.js';
import './directory-menu.scss';

function DirectoryMenu() {
    const [section, setSection] = useState([
        { title: 'vases', imageUrl: 'h', id: 1 },
        { title: 'miscellaneous', imageUrl: 'h', id: 2 },
        {
            title: 'bowls',
            imageUrl:
                'https://github.com/mariaozamiz/gallery/blob/main/src/images/bowl_mariaozamiz.jpg?raw=true',
            id: 3,
        },
        { title: 'home', imageUrl: 'h', id: 4 },
        { title: 'tableware', imageUrl: 'h', id: 5 },
    ]);

    const sections = section.map((section) => {
        return (
            <MenuItem
                key={section.id}
                title={section.title}
                imageUrl={section.imageUrl}
                id={section.id}
            />
        );
    });

    return <div className="directory-menu">{sections}</div>;
}

export default DirectoryMenu;
