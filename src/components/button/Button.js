import React from 'react';
import { ButtonContainer } from './button.styles.jsx';

function Button({ children, ...props }) {
    return <ButtonContainer {...props}>{children}</ButtonContainer>;
}

export default Button;
