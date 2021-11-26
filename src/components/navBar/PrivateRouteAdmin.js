import React from 'react'
import { Redirect, Route } from 'react-router'

const PrivateRouteAdmin = (props) => {
    const { path, Component, exact } = props
    
    const role = localStorage.getItem('role')

    return (
        <Route path={path} exact={exact} render={(props) => {
            return  role === 'admin' ? <Component {...props} /> : <Redirect to="/login" /> 
        }} />
    )
}

export default PrivateRouteAdmin