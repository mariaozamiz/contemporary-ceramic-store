import React from 'react';
import SignIn from '../sign-in/Sign-in';
import SignUp from '../sign-up/Sign-up';
import './registration.scss';

function Registration() {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    );
}

export default Registration;
