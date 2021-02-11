import React from 'react'
import { useDispatch } from 'react-redux'

import '../Styling/logout.css'
import { user } from '../Reducers/user'

export const Logout = () => {

    const dispatch = useDispatch();
    

    const handleLogout = () => {
        dispatch(user.actions.logout());
    };

    return (
        <>
            <h1 className="h1-member">Pregnancy Week By Week</h1>
            <div className="member-background">
                <div className="member-wrapper">
            <button type="submit"
                value="submit"
                onClick={handleLogout}
                >
                    Logout
                </button>
                </div>
        </div>
        </>

    )  
}