import React from 'react'
import styled from 'styled-components'

export const Home = () => {
    return (
        <HomeContainer>
            <Text>This is the homepage</Text>
        </HomeContainer>
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