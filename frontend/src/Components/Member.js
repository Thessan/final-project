import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import '../Styling/member.css'
import { Sidebar } from './NavigationBar/Sidebar'
import { Navbar } from './NavigationBar/Navbar'

export const Member = () => {
    const [message, setMessage] = useState("");
    
    const accessToken = useSelector((store) => store.user.login.accessToken); 
    const userId = useSelector((store) => store.user.login.userId);

    const AUTH_URL = `https://pregnancy-week-by-week.herokuapp.com/login/${userId}/member`

    fetch(AUTH_URL, {
        method: "GET",
        headers: { Authorization: `${accessToken}` },
    })
        .then((response) => response.json())
        .then((json) => {
            setMessage(json.message)
        });
    return (
        <>
            <Sidebar />
            <Navbar />
                <h1 className="h1-member">Pregnancy Week By Week</h1>
                    <div className="member-background">
                        <div className="member-wrapper">
                            <p className="message-text">{message}</p>
                        </div>
                    </div>
        </>
    );
};