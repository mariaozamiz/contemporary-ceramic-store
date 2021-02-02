import React from 'react';
import CollectionItem from '../collection-item/Collection-item';
import {
    CollectionPreviewContainer,
    TitleContainer,
    PreviewContainer,
} from './collection-preview.styles';

function CollectionPreview({ title, items }) {
    return (
        <CollectionPreviewContainer>
            <TitleContainer>{title}</TitleContainer>
            <PreviewContainer>
                {items
                    .filter((item, i) => i < 4)
                    .map((item) => (
                        <CollectionItem key={item.id} item={item} />
                    ))}
            </PreviewContainer>
        </CollectionPreviewContainer>
    );
}

export default CollectionPreview;
