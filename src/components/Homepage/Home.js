import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'

import { loggedIn, startGetAdminAccount } from '../../actions/adminAction'

import HomeNavBar from './HomeNavBar'

const Home = (props) => {
    const { history } = props
    const dispatch = useDispatch()

    const userData = useSelector((state) => {
        return state.admin
    })

    const { isLoggedIn, isLoading } = userData

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
            { isLoading ? (
                    <Box sx={{display: 'flex', justifyContent : 'center' , mt : 30}}>
                        <CircularProgress />
                    </Box>
                ) : (
                    <HomeNavBar isLoggedIn={isLoggedIn} handleClick={handleClick} />
            ) }
        </>
    )
}

export default Home