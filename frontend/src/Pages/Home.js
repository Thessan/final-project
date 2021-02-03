import React from 'react'
import styled from 'styled-components'

import { Signup } from '../Components/Signup'

export const Home = () => {
    return (
        <>
        <HomeContainer>
            <Text>This is the homepage</Text>
        </HomeContainer>
        <Signup />
        </>
    );
}

const HomeContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
`

const Text = styled.h1`
    color: goldenrod;
`