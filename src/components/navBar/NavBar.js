import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './Home'
import Register from '../admin-auth/Register'

const NavBar = (props) => {
    
    return (
        <>
            <Route path="/" component={Home} />
            <Switch>
                <Route path="/register" component={Register} />
            </Switch>
        </>
    )
}

export default NavBar