import React from 'react'
import { Redirect, Route } from 'react-router'
import { useSelector } from 'react-redux'

const PrivateRouteStudent = (props) => {
    const { path, Component, exact } = props

    const isLoading = useSelector((state) => {
        return state.student.isLoading
    })
    
    const role = localStorage.getItem('role')

    return (
        <>
            { !isLoading && (
                <Route path={path} exact={exact} render={(props) => {
                    return  role === 'student' ? <Component {...props} /> : <Redirect to="/login" /> 
                }} />
            ) }
        </>
    )
}

export default PrivateRouteStudent