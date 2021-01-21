import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as GoIcons from 'react-icons/go'

// I'm mapping over these items in Navbar.js
export const NavbarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'navbar-text' 
    },

    {
        title: 'First Trimester',
        path: '/first-trimester',
        icon: <GoIcons.GoHeart />,
        className: 'navbar-text'
    },

    {
        title: 'Second Trimester',
        path: '/second-trimester',
        icon: <GoIcons.GoHeart />,
        className: 'navbar-text'
    },

    {
        title: 'Third Trimester',
        path: '/third-trimester',
        icon: <GoIcons.GoHeart />,
        className: 'navbar-text'
    },
]