import React from 'react'
import styled from 'styled-components'

import { Login } from '../Components/Login'

export const FirstPage = () => {
    return (
        <>
        <HomeContainer>
            <Login />
        </HomeContainer>
        </>
    );
}

const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
`
