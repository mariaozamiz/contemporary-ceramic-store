import React, { useState } from 'react';
import MenuItem from '../menu-item/Menu-item.js';
import './directory-menu.scss';

function DirectoryMenu() {
    const [section, setSection] = useState([
        {
            title: 'vases',
            imageUrl:
                'https://github.com/mariaozamiz/gallery/blob/main/public/images/vases.jpeg?raw=true',
            id: 1,
        },
        {
            title: 'pots',
            imageUrl:
                'https://github.com/mariaozamiz/gallery/blob/main/public/images/pots.jpeg?raw=true',
            id: 2,
        },
        {
            title: 'bowls',
            imageUrl:
                'https://github.com/mariaozamiz/gallery/blob/main/public/images/bowls.jpg?raw=true',
            id: 3,
        },
        {
            title: 'home decor',
            imageUrl:
                'https://github.com/mariaozamiz/gallery/blob/main/public/images/home-decor.jpg?raw=true',
            size: 'large',
            id: 4,
        },
        {
            title: 'tableware',
            imageUrl:
                'https://github.com/mariaozamiz/gallery/blob/main/public/images/tableware.jpg?raw=true',
            size: 'large',
            id: 5,
        },
    ]);

    const sections = section.map((section) => {
        return (
            <MenuItem
                key={section.id}
                title={section.title}
                imageUrl={section.imageUrl}
                imageSize={section.size}
                id={section.id}
            />
        );
    });

    return <div className="directory-menu">{sections}</div>;
}

export default DirectoryMenu;
