import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { user } from '../Reducers/user'

const SIGNUP_URL = 'https://pregnancy-week-by-week.herokuapp.com/signup'

export const Signup = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // will force email addresses to have the correct pattern (e.g xx@xxx.xx)
    const validEmail = { pattern: "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$" } 

    /* const signupError = useSelector((store) => store.user.login.statusMessage);
 */
    const handleSignupSuccess = (signupResponse) => {
        dispatch(user.actions.setUserId({ userId: signupResponse.userId }));
        dispatch(user.actions.setStatusMessage({ statusMessage: 'Signup success' }));
    };

    const handleSignupFailed = (signupError) => {
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
        event.preventDefault();

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
        <>
        <form onSubmit= {onSignup}>
            <div className="signup-form" tabIndex="0">
                <div className="username">
                    <input type="text"
                        id="username"
                        placeholder="Username"
                        onChange={onUsernameChange}
                    />
                </div>

                <div className="email">
                    <input type="text"
                        id="email"
                        placeholder="Email"
                        onChange={onEmailChange}
                        validEmail={validEmail}
                    />
                        <label> e.g hello@hello.com </label>
                </div>

                <div className="password">
                    <input type="password"
                        id="password"
                        placeholder="Password"
                        onChange={onPasswordChange}
                    />
                        <label> min 5 characters, max 15 </label>
                </div>

                
            </div>
        </form>
        </>
    )
}

