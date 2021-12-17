import React from 'react'
import { Link } from 'react-router-dom'

import Heading from '../Reusable-Comp/Heading'
import HomeNavBar from './HomeNavBar'
import TitleLogo from './TitleLogo'

const LoggedInNavBar = (props) => {
    const { userRole, isLoggedIn, studentLoggedIn, handleClick } = props

    return (
        <>
            { isLoggedIn || studentLoggedIn ? (
                <>  
                    <div className="nav-bar">
                        <TitleLogo />
                        <nav className="navigation">
                            <Link to={ userRole === 'admin' ? (
                                "/admin/dashboard"
                            ) : (
                                "/student/dashboard" 
                            )}>Dashboard</Link>
                            <Link to={ userRole === 'admin' ? (
                                "/admin/courses" 
                            ) : (
                                "/student/courses"
                            )}>Courses</Link>
                            { userRole === 'admin' && <Link to="/admin/students">Students</Link> }
                            <Link to={ userRole === 'admin' ? (
                                "/admin/account"
                            ) : (
                                "/student/account" 
                            )}>Account</Link>
                            <Link to="#" onClick={handleClick} >Log-out</Link>
                        </nav>
                    </div>
                    
                </>
            ) : (
                <>    
                    <HomeNavBar />
                </> 
            ) }
        </>
    )
}

export default LoggedInNavBar