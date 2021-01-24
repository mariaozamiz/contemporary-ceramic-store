import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/Collection-item';
import { selectCollection } from '../../redux/shop/shop.selectors';
import './collectionpage.scss';

function CollectionPage({ collection }) {
    console.log(collection);
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="item">
                {items.map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
