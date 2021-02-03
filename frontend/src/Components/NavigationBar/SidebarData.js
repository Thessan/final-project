import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as GoIcons from 'react-icons/go'
/* import * as FaIcons from 'react-icons/fa' */

// I'm mapping over these items in Sidebar.js
export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        className: 'sidebar-text' 
    },

    {
        title: 'First Trimester',
        path: '/first-trimester',
        icon: <GoIcons.GoHeart />,
        className: 'sidebar-text'
    },

    {
        title: 'Second Trimester',
        path: '/second-trimester',
        icon: <GoIcons.GoHeart />,
        className: 'sidebar-text'
    },

    {
        title: 'Third Trimester',
        path: '/third-trimester',
        icon: <GoIcons.GoHeart />,
        className: 'sidebar-text'
    },

   /*  {
        title: 'Todo Lists',
        path: '/todo-lists',
        icon: <FaIcons.FaListUl />,
        className: 'sidebar-text'
    }, */
]