import React from 'react'
import { Link } from 'react-router-dom'

import '../../Styling/navbar.css'
import { NavbarData } from './NavbarData'

export const Navbar = () => {

    return (
        <>
        <div className="navbar">
            {/* map over the items from NavbarData.js */}
            {NavbarData.map((item, index) => {
                return (
                    <div key={index} className={item.className}>
                        <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                        </Link>
                    </div> 
                )
            })}
        </div>
        </>
    );
}