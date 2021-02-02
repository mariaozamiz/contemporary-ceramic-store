import React from 'react';
import SignIn from '../sign-in/Sign-in';
import SignUp from '../sign-up/Sign-up';
import { SignInAndSignUpContainer } from './registration.styles';

function Registration() {
    return (
        <SignInAndSignUpContainer>
            <SignIn />
            <SignUp />
        </SignInAndSignUpContainer>
    );
}

export default Registration;
