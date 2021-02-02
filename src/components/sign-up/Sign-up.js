import React, { useState } from 'react';
import FormInput from '../form-input/Form-input';
import Button from '../button/Button';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { SignUpContainer, SignUpTitle } from './sign-up.styles';

function SignUp() {
    const [signup, setSignup] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        setSignup({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
        if (signup.password !== signup.confirmPassword) {
            alert("paswords don't match");
            return;
        }
        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                signup.email,
                signup.password
            );
            await createUserProfileDocument(user, {
                displayName: signup.displayName,
            });
            setSignup({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (ev) => {
        const { name, value } = ev.target;
        setSignup({
            ...signup,
            [name]: value,
        });
    };

    return (
        <SignUpContainer>
            <SignUpTitle>I do not have an account</SignUpTitle>
            <span>Sign up with your email and password</span>
            <form
                autoComplete="off"
                className="sign-up-form"
                onSubmit={handleSubmit}
            >
                <FormInput
                    name="displayName"
                    type="name"
                    value={signup.displayName}
                    handleChange={handleChange}
                    label="name"
                    required
                />

                <FormInput
                    name="email"
                    type="email"
                    value={signup.email}
                    handleChange={handleChange}
                    label="email"
                    required
                />

                <FormInput
                    name="password"
                    type="password"
                    value={signup.password}
                    handleChange={handleChange}
                    label="password"
                    required
                />

                <FormInput
                    name="confirmPassword"
                    type="password"
                    value={signup.confirmPassword}
                    handleChange={handleChange}
                    label="confirm password"
                    required
                />

                <Button type="submit">Sign up</Button>
            </form>
        </SignUpContainer>
    );
}

export default SignUp;
