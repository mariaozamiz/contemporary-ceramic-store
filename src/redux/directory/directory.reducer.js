const INITIAL_STATE = {
    sections: [
        {
            title: 'vases',
            imageUrl:
                'https://github.com/mariaozamiz/gallery/blob/main/public/images/vases.jpeg?raw=true',
            id: 1,
            linkUrl: 'shop/vases',
        },
        {
            title: 'pots',
            imageUrl:
                'https://github.com/mariaozamiz/gallery/blob/main/public/images/pots.jpeg?raw=true',
            id: 2,
            linkUrl: 'shop/pots',
        },
        {
            title: 'bowls',
            imageUrl:
                'https://github.com/mariaozamiz/gallery/blob/main/public/images/bowls.jpg?raw=true',
            id: 3,
            linkUrl: 'shop/bowls',
        },
        {
            title: 'home decor',
            imageUrl:
                'https://github.com/mariaozamiz/gallery/blob/main/public/images/home-decor.jpg?raw=true',
            size: 'large',
            id: 4,
            linkUrl: 'shop/homedecor',
        },
        {
            title: 'tableware',
            imageUrl:
                'https://github.com/mariaozamiz/gallery/blob/main/public/images/tableware.jpg?raw=true',
            size: 'large',
            id: 5,
            linkUrl: 'shop/tableware',
        },
    ],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;
