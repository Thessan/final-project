import React from 'react'
import styled from 'styled-components'

import { Signup } from '../Components/Signup'

export const Home = () => {
    return (
        <>
        <HomeContainer>
            <Signup />
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
