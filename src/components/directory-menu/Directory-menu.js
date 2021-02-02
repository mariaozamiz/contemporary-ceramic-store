import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directory.selectors.js';
import MenuItem from '../menu-item/Menu-item.js';
import { DirectoryMenuContainer } from './directory-menu.styles';

function DirectoryMenu({ sections }) {
    return (
        <DirectoryMenuContainer>
            {sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </DirectoryMenuContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections,
});

export default connect(mapStateToProps)(DirectoryMenu);
