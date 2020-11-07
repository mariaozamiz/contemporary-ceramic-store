import React, { useState } from 'react';
import FormInput from '../form-input/Form-input';
import './sign-in.scss';

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
        console.log('vou cambiar o estado con isto:', { [name]: value });
        setSignin({ ...signin, [name]: value });
        console.log('resultado:', signin);
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

                <input type="submit" value="submit Form" />
            </form>
        </div>
    );
}

export default SignIn;
