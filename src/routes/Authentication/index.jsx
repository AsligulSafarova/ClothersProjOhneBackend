import React from 'react';

import SignIn from '../../components/SignIn/index.jsx';
import SignUp from '../../components/SignUp/index.jsx';
import "./auth.style.scss"

export default function Authantication() {
    return (
        <div className='auth-container'>

            <SignIn />
            <SignUp />
        </div>
    )
}
