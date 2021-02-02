import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CollectionPreview from '../collection-preview/Collection-preview';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { CollectionsOverviewContainer } from './collections-overview.styles';
import { CollectionPreviewContainer } from '../collection-preview/collection-preview.styles';

function CollectionsOverview({ collections }) {
    return (
        <CollectionPreviewContainer>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </CollectionPreviewContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
