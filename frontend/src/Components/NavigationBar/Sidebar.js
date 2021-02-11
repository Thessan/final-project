import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import * as GiIcons from 'react-icons/gi' 
import * as MdIcons from 'react-icons/md' 

import './sidebar.css'
import { SidebarData } from './SidebarData'

export const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false) // the original state is false = the sidebar is hidden

    const showSidebar = () => setSidebar(!sidebar)  // will update the value to the opposite of what it currently is

    return (
        <>
        <div className="sidebar">
            <Link to="#" className="hamburger-icon">
                <GiIcons.GiHamburgerMenu onClick={showSidebar}/> {/* when hamburger menu is clicked the sidebar will be visible */}
            </Link>
        </div>

        {/*tenary operator below = if I click on the hamburger icon 
        the class sidebar-menu will be set to active (to be showing) or
        else it will be hidden */}
        <nav className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
            <ul className="sidebar-menu-items" onClick={showSidebar}> {/* when the X is clicked the sidebar will be hidden */}
                <li className="sidebar-toggle">
                    <Link to="#" className="close-icon">
                        <MdIcons.MdClose />
                    </Link>
                </li>
                {/* mapping over the items from SidebarData */}
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.className}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li> 
                    )
                })}
            </ul>
        </nav>
    </>
    );
}