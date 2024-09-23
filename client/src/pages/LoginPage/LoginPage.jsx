import React, { useState } from 'react';

import "./LoginPage.scss";

function LoginPage() {

    const [email, setEmail] = useState();
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const submitHandler = () => {
        
    }

    return (
        <>
            <div className='card'>
                <h1>Login to Youtube</h1>
                <div className='input-container'>
                    <input
                        type="text"
                        placeholder='Enter your username'
                        value={userName}
                        onChange={(e) => { setUserName(e.target.value) }}
                    />
                    <input
                        type="email"
                        placeholder='Enter your email'
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                    <input
                        type="password"
                        placeholder='Enter your passwrod'
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                    />
                </div>
                <button onClick={submitHandler}>Login</button>
            </div>
        </>
    )
}

export default LoginPage
