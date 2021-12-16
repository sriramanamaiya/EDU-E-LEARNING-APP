import React from 'react'
import { Link } from 'react-router-dom'

import Heading from '../Reusable-Comp/Heading'

const HomeNavBar = (props) => {

    return (
        <>
            <div className="nav-bar">
                <Heading type="h1" title="Edu E-learning App 📚" />
                <nav className="navigation">
                    <Link to="/" >Home</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/login" >Login</Link>
                </nav>
            </div>
        </>
    )
}

export default HomeNavBar