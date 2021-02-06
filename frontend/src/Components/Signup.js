import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { user } from '../Reducers/user'
import '../Styling/signup.css'

const SIGNUP_URL = 'https://pregnancy-week-by-week.herokuapp.com/signup'

export const Signup = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(username)
    console.log(email)
    console.log(password)

    const signupError = useSelector((store) => store.user.login.statusMessage);

    const handleSignupSuccess = (signupResponse) => {
        console.log("success", signupResponse)
        dispatch(user.actions.setUserId({ userID: signupResponse.userId }));
        dispatch(user.actions.setStatusMessage({ statusMessage: 'Signup success' }));
    };

    const handleSignupFailed = (signupError) => {
        console.log("error", signupError)
        dispatch(user.actions.setAccessToken({ accessToken: null }));
        dispatch(user.actions.setStatusMessage({ statusMessage: signupError }));
    };

    const onUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const onEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    };

    // fetch signup
    const onSignup = (event) => {
    event.preventDefault()

        fetch(SIGNUP_URL, {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => {
                if (!response.ok) {
                    // eslint-disable-next-line
                    throw "Sorry, could not signup user";
                }
                return response.json();
                
            })
            .then((json) => handleSignupSuccess(json))
            .catch((err) => handleSignupFailed(err));

            // this will reset input fields after user clicks on Signup button
            setUsername("") 
            setEmail("") 
            setPassword("") 
    }

    return (
        <div className="signup-background">
            <h1 className="h1-signup">Pregnancy Week By Week</h1>
            <div className="wrapper">
        <form onSubmit= {onSignup}>
            <div className="signup-form" tabIndex="0">
                <p>Want to become a member? Sign up here!</p>
                    <div className="input">
                        <input type="text"
                            id="username"
                            placeholder="Username"
                            onChange={onUsernameChange}
                        />
                    </div>
                
                    <div className="input">
                        <input type="email"
                            id="email"
                            placeholder="Email"
                            onChange={onEmailChange}
                        />  
                    </div>
                        <div className="label-div">
                            <label> e.g hello@hello.com </label>
                        </div>

                    <div className="input">
                        <input type="password"
                            id="password"
                            placeholder="Password"
                            onChange={onPasswordChange}
                        />
                    </div>
                        <div className="label-div">
                            <label> min 5 characters, max 15 </label>
                        </div>

                <div className="signup-button" tabIndex="0">
                    <button type="submit"
                        value="submit"
                        >
                        Signup
                        </button>
                </div>
                {signupError && <p>{signupError}</p>}

                <div className="to-login">
                    <p>Already a member? <Link to={`/`}>Login here</Link></p>
                </div>
            </div>
        </form>
        </div>
        </div>
    )
}

