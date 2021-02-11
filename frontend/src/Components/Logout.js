import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";

import '../Styling/logout.css'
import { user } from '../Reducers/user'

export const Logout = () => {

    let history = useHistory();
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(user.actions.logout());
        
        history.push("/");
    };

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
}