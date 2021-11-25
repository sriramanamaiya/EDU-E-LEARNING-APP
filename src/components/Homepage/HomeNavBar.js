import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

import Heading from '../Reusable-Comp/Heading'

const HomeNavBar = (props) => {
    const { isLoggedIn, handleClick } = props

    return (
        <Grid container>
                <Grid item md={12}>
                <div className="nav-bar">
                    <Heading type="h1" title="Edu E-learning App 📚" />
                    <nav className="navigation">
                        { isLoggedIn ? (
                            <>  
                                <Link to="/">Home</Link>
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
                </Grid>
                <Grid item md={12}>
                    {/* <Box sx={{display:'flex', justifyContent : 'space-between', mt : 2}}>
                        <img src="https://www.litmos.com/wp-content/uploads/2016/06/blog-eLearning-templates.png" width="50%" height="500" alt="E-learning" />
                    </Box> */}
                </Grid>
            </Grid>
    )
}

export default HomeNavBar