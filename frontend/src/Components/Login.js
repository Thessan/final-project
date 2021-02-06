import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import '../Styling/login.css'
import { user } from '../Reducers/user'
import { MemberPage } from '../Components/MemberPage'

const LOGIN_URL = 'https://pregnancy-week-by-week.herokuapp.com/login'

export const Login = () => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // to access the users accessToken
    const accessToken = useSelector((store) => store.user.login.accessToken);       
    // to displays error message when login fails
    const loginError = useSelector((store) => store.user.login.statusMessage);
    

    const handleLoginSuccess = (loginResponse) => {
        dispatch(user.actions.setAccessToken({ accessToken: loginResponse.accessToken }));
        dispatch(user.actions.setUserId({ userId: loginResponse.userId }));
        dispatch(user.actions.setStatusMessage({ statusMessage: 'Login success' }));
    };

    const handleLoginFailed = (loginFailed) => {
        dispatch(user.actions.setAccessToken({ accessToken: null }));
        dispatch(user.actions.setStatusMessage({ statusMessage: loginFailed }));
    };

    const onUsernameLoginChange = (event) => {
        setUsername(event.target.value);
    };

    const onPasswordLoginChange = (event) => {
        setPassword(event.target.value);
    };

    // fetch login
    const onLogin = (event) => {
    event.preventDefault()

        fetch(LOGIN_URL, {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => {
                if (!response.ok) {

                    // eslint-disable-next-line
                    throw "Sorry, could not login user";
                }
                return response.json();
            })
            .then((json) => handleLoginSuccess(json))
            .catch((err) => handleLoginFailed(err));
        
        // this will reset input fields after user clicks on the Login button
        setUsername("")
        setPassword("")
    }

    if (!accessToken) {

        return (
            <div className="login-background">
            <h1 className="h1-login">Pregnancy Week By Week</h1>
                <div className="wrapper">
        <form onSubmit= {onLogin}>
            <div className="login-form" tabIndex="0">
                <p>Login here</p>
                    <div className="input">
                        <input type="text"
                            id="username"
                            placeholder="Username"
                            onChange={onUsernameLoginChange}
                        />
                    </div>

                    <div className="input">
                        <input type="password"
                            id="password"
                            placeholder="Password"
                            onChange={onPasswordLoginChange}
                        />
                    </div>

                <div className="login-button" tabIndex="0">
                    <button type="submit"
                        value="submit"
                        >
                            Login
                        </button>
                </div>
                {loginError && <p>{loginError}</p>}

                <div className="to-signup">
                    <p>Not yet a member? <Link to={`/signup`}>Sign up here</Link></p>
                </div>
            </div>
        </form>
        </div>
        </div>
        );
    } else {
        return <MemberPage /> 
    }


}