import React from 'react'
import { Link } from 'react-router-dom'

import Heading from '../common-comp/Heading'

const HomeNavBar = (props) => {
    const { isLoggedIn, handleClick } = props

    return (
        <div className="nav-bar">
            <Heading type="h1" title="E-learning App" />
            <nav className="navigation">
                { isLoggedIn ? (
                    <>
                        <Link to="/admin/dashboard">Dashboard</Link>
                        <Link to="/admin/students">Students</Link>
                        <Link to="/admin/course">Course</Link>
                        <Link to="/admin/account">Account</Link>
                        <Link to="#" onClick={handleClick} >LogOut</Link>
                    </>
                ) : (
                    <>    
                        <Link to="/" >Home</Link>
                        <Link to="/register">Register</Link>
                        <Link to="/login" >Login</Link>
                    </> 
                ) }
            </nav>
        </div>
    )
}

export default HomeNavBar