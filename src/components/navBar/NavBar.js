import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './Home'
import Register from '../admin-auth/Register'
import Login from '../admin-auth/Login'

const NavBar = (props) => {
    
    return (
        <>
            <Route path="/" component={Home} />
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
            </Switch>
        </>
    )
}

export default NavBar