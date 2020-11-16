import React, { useState } from 'react';
import FormInput from '../form-input/Form-input';
import Button from '../button/Button';
import './sign-in.scss';
import { signInWithGoogle } from '../../firebase/firebase.utils';

function SignIn() {
    const [signin, setSignin] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (ev) => {
        ev.preventDefault();
        setSignin({ email: '', password: '' });
    };

    const handleChange = (ev) => {
        const { value, name } = ev.target;
        setSignin({ ...signin, [name]: value });
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
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
                <div className="buttons">
                    <Button type="submit">Sign in</Button>
                    <Button onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default SignIn;
