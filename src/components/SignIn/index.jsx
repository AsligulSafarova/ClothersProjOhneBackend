import React from 'react';
import { useState } from 'react';
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/Firebase/firebase.utils.js';
import FormInputs from '../FormInputs/index.jsx';
import "./sign-in-form.style.scss";
import Button from "../Button";
import { UserContext } from '../Contexts/index.jsx';

const defaultFormFields = {
    email: '',
    password: '',
};

export default function SignIn() {
    const [formField, setFormField] = useState(defaultFormFields);

    const { email, password, } = formField;

    const resetFormField = () => {
        setFormField(defaultFormFields)
    };

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();

    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
            /*   setCurrentUser(user) */

            resetFormField();
        } catch (error) {

            if (error.code === "auth/invalid-login-credentials") {
                alert('incorect password for email')
            } else if ('auth / user - not - found') {
                console.log('email is not correct');
            }
            console.log(error);
        }
    }


    const handleChanges = (event) => {
        const { name, value } = event.target;
        setFormField({ ...formField, [name]: value });
    }
    return (
        <div className='sign-up-container'>
            <h2> Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInputs label="Email" type="email" required name="email" onChange={handleChanges} value={email} />
                <FormInputs label="Password" type="password" required name="password" onChange={handleChanges} value={password} />
                <div className='buttons-container'>
                    <Button type='submit'>Sign In</Button>
                    <Button type='button' onClick={signInWithGoogle} buttonType='google'>Google sign in </Button>
                </div>

            </form>
        </div>
    )

};