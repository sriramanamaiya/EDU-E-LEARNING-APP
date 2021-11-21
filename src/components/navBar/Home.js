import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { loggedIn, startGetAdminAccount } from '../../actions/adminAction'

import HomeNavBar from './HomeNavBar'

const Home = (props) => {
    const { history } = props
    const dispatch = useDispatch()

    const userData = useSelector((state) => {
        return state.admin
    })

    const { isLoggedIn } = userData

    useEffect(() => {
        const token = localStorage.getItem('token')
        if( token ){
            dispatch(loggedIn())
            dispatch(startGetAdminAccount(token))
        }
    },[])

    const handleClick = () => {
        const userConfirmation = window.confirm('Are You Sure')
        if( userConfirmation ){
            localStorage.removeItem('token')
            dispatch(loggedIn())
            history.push('/')
        }
    }

    return (
        <>  
            <HomeNavBar isLoggedIn={isLoggedIn} handleClick={handleClick} />
        </>
    )
}

export default Home