import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import { withRouter } from 'react-router'
import jwtDecode from 'jwt-decode'

import { adminLogOut, loggedIn, startGetAdminStudentsCourses } from '../../actions/adminAction'
import { startGetAllCoursesStudent, studentAccountInfo, studentIsLoggedIn, studentLogOut } from '../../actions/studentAction'

import LoggedInNavBar from './LoggedInNavBar'

const NavBar = (props) => {
    const { history } = props
    const [ userRole, setUserRole ]= useState('')

    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return [state.admin, state.student]
    })

    const [ userData, studentsData ] = data
    const { isLoggedIn, isLoading } = userData
    const { studentLoggedIn, isLoading : studentIsLoading } = studentsData
   
    useEffect(() => {
        const token = localStorage.getItem('token')
        const role = localStorage.getItem('role')
        if( token ){
            if( role === 'admin' ){
                dispatch(loggedIn())
                dispatch(startGetAdminStudentsCourses(token))
            }else{
                dispatch(studentAccountInfo(jwtDecode(token)))
                dispatch(startGetAllCoursesStudent(token))
                dispatch(studentIsLoggedIn())
            }
        }
    },[])

    useEffect(() => {
        const role = localStorage.getItem('role')
        if( role ){
            setUserRole(role)
        }else{
            setUserRole('')
        }
    },[isLoggedIn,studentLoggedIn])

    const handleClick = () => {
        const userConfirmation = window.confirm('Are You Sure')
        if( userConfirmation ){
            if( localStorage.getItem('role') === 'admin' ){
                dispatch(adminLogOut())
            }else{
                dispatch(studentLogOut())
            }
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            history.push('/')
        }
    }

    return (
        <>  
            { isLoading || studentIsLoading ? (
                <Box sx={{display: 'flex', justifyContent : 'center' , mt : 30}}>
                    <CircularProgress />
                </Box>
            ) : (
                <LoggedInNavBar 
                    userRole={userRole} 
                    isLoggedIn={isLoggedIn} 
                    studentLoggedIn={studentLoggedIn} 
                    handleClick={handleClick} 
                />
            )}
        </>
    )
}

export default withRouter(NavBar)