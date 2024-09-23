import React from 'react';

import "./LoginPage.scss";

function LoginPage() {

    return (
        <>
            <div className='card'>
                <h1>Login to Youtube</h1>
                <div className='input-container'>
                    <input type="text" placeholder='Enter your username' />
                    <input type="email" placeholder='Enter your email'/>
                    <input type="password" placeholder='Enter your passwrod'/>
                </div>
                <button>Login</button>
            </div>
        </>
    )
}

export default LoginPage
