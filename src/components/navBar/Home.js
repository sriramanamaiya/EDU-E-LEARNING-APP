import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AppBar, Toolbar } from '@mui/material'

import { loggedIn } from '../../actions/adminAction'

import Heading from '../common-comp/Heading'
import AlertComp from '../common-comp/AlertComp'

const Home = (props) => {
    const dispatch = useDispatch()

    const userData = useSelector((state) => {
        return state.admin
    })

    const { isLoggedIn, message } = userData

    useEffect(() => {
        const token = localStorage.getItem('token')
        if( token ){
            dispatch(loggedIn())
        }
    },[])

    const handleClick = () => {
        const userConfirmation = window.confirm('Are You Sure')
        if( userConfirmation ){
            localStorage.removeItem('token')
            dispatch(loggedIn())
        }
    }

    return (
        <>
            <AppBar>
                <Toolbar>
                    <Heading type="h1" title="E-learning App" />
                    <Link to="/" >Home</Link>
                    { isLoggedIn ? (
                        <>  
                            <Link to="/account">Account</Link>
                            <Link to="/course">Course</Link>
                            <Link to="/student">Student</Link>
                            <Link to="#" onClick={handleClick} >LogOut</Link>
                            { message.hasOwnProperty('notice') && <AlertComp type="success" title={message.notice} />}
                        </>
                    ) : (
                        <>
                            <Link to="/register">Register</Link>
                            <Link to="/login" >Login</Link> 
                        </>
                    ) }
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Home