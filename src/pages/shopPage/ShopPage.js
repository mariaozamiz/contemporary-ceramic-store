import React, { useEffect, useState } from 'react';
import getDataFromApi from '../../services/getDataFromApi';
import './shoppage.scss';
import CollectionPreview from '../../components/collection-preview/Collection-preview';

function ShopPage() {
    const [collections, setCollections] = useState([]);

    useEffect(() => {
        getDataFromApi().then((data) => {
            setCollections(data);
        });
    }, []);

    const collectionInfo = collections.map((collection) => {
        return (
            <div key={collection.id}>
                <CollectionPreview
                    title={collection.title}
                    routeName={collection.routeName}
                    items={collection.items}
                />
            </div>
        );
    });

    return <div className="shop-page">{collectionInfo}</div>;
}

export default ShopPage;
