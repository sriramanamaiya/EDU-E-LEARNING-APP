import React from 'react'
import { Link } from 'react-router-dom'

import Heading from '../Reusable-Comp/Heading'
import HomeNavBar from './HomeNavBar'

const LoggedInNavBar = (props) => {
    const { userRole, isLoggedIn, studentLoggedIn, handleClick } = props

    return (
        <>
            { isLoggedIn || studentLoggedIn ? (
                <>  
                    <div className="nav-bar">
                        <Heading type="h1" title="Edu E-learning App 📚" />
                        <nav className="navigation">
                            <Link to="/">Home</Link>
                            { userRole === 'admin' ? ( 
                                <>
                                    <Link to="/admin/dashboard">Dashboard</Link>
                                    <Link to="/admin/courses">Course</Link>
                                </>
                            ) : (
                                <> 
                                    <Link to="/student/dashboard">Dashboard</Link>
                                    <Link to="/student/course">Course</Link>
                                </>
                            )}
                            { userRole === 'admin' && <Link to="/admin/students">Students</Link> }
                            <Link to="/admin/account">Account</Link>
                            <Link to="#" onClick={handleClick} >LogOut</Link>
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