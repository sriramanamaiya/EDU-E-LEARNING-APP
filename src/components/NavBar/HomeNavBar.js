import React from 'react'
import { Link } from 'react-router-dom'

import TitleLogo from './TitleLogo'

const HomeNavBar = (props) => {

    return (
        <>
            <div className="nav-bar">
                <TitleLogo />
                <nav className="navigation">
                    <Link to="/register">Register</Link>
                    <Link to="/login" >Login</Link>
                </nav>
            </div>
        </>
    )
}

export default HomeNavBar