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

    const handleGoBack = () => {
        history.push("/member");
    }

    return (
        <>   
        <h1 className="h1-logout">Pregnancy Week By Week</h1>
        <section className="logout-background">
            <div className="logout-container">
        <p className="logout-text">Are you sure you want to log out?</p>
            <div className="button-container">
                <button className="logout-button" type="submit"
                value="submit"
                onClick={handleLogout}
                >
                    Yes, log out
                </button>

                <button className="goback-button" type="submit"
                value="submit"
                onClick={handleGoBack}
                >
                    No, go back
                </button>
                </div>
                </div>
                </section>
        </>
        
    )
}