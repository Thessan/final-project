import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import '../Styling/logout.css'
import { user } from '../Reducers/user'
import { Login } from './Login'

export const Logout = () => {

    const dispatch = useDispatch();
    const accessToken = useSelector((store) => store.user.login.accessToken); 

    const handleLogout = () => {
        dispatch(user.actions.logout());
    };

    if (!accessToken) {

    return (
        <>   
        <p>are you sure you want to log out? </p>
            <button type="submit"
                value="submit"
                onClick={handleLogout}
                >
                    Logout
                </button>
        </>
        
    )  
    } else {
        return (
            <Login />
        )
    }
}