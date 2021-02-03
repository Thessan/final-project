import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const MemberPage = () => {
    const [message, setMessage] = useState("");
    
    const accessToken = useSelector((store) => store.user.login.accessToken);
    const userId = useSelector((store) => store.user.login.userId);

    const AUTH_URL = `https://pregnancy-week-by-week.herokuapp.com/login/${userId}/memberPage`

    fetch(AUTH_URL, {
        method: "GET",
        headers: { Authorization: `${accessToken}` },
    })
        .then((response) => response.json())
        .then((json) => {
            setMessage(json)
        });
    return (
        <>
            <p>{message}</p>
        </>
    );
};