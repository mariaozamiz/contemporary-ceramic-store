import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import './collections-overview.scss';
import CollectionPreview from '../collection-preview/Collection-preview';
import { selectCollections } from '../../redux/shop/shop.selectors';

function CollectionsOverview({ collections }) {
    return (
        <div className="collections-overview">
            <div className="shop-page">
                {collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
