import React from 'react'
import { Redirect, Route } from 'react-router'

const PrivateRouteStudent = (props) => {
    const { path, Component, exact, studentIsLoading } = props
    
    const role = localStorage.getItem('role')

    return (
        <>
            { !studentIsLoading && (
                <Route path={path} exact={exact} render={(props) => {
                    return  role === 'student' ? <Component {...props} /> : <Redirect to="/login" /> 
                }} />
            ) }
        </>
    )
}

export default PrivateRouteStudent