import React, { useState } from 'react';
import FormInput from '../form-input/Form-input';
import Button from '../button/Button';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer,
} from './sign-in.styles';

function SignIn() {
    const [signin, setSignin] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        const { email, password } = signin;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setSignin({ email: '', password: '' });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (ev) => {
        const { value, name } = ev.target;
        setSignin({ ...signin, [name]: value });
    };

    return (
        <SignInContainer>
            <SignInTitle>I already have an account</SignInTitle>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    type="email"
                    value={signin.email}
                    handleChange={handleChange}
                    label="email"
                    required
                />

                <FormInput
                    name="password"
                    type="password"
                    value={signin.password}
                    handleChange={handleChange}
                    label="password"
                    required
                />
                <ButtonsBarContainer>
                    <Button type="submit">Sign in</Button>
                    <Button onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                    </Button>
                </ButtonsBarContainer>
            </form>
        </SignInContainer>
    );
}

export default SignIn;
