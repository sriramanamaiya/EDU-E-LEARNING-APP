import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './Home'
import Register from '../admin-auth/Register'
import Login from '../admin-auth/Login'
import Account from '../admin-auth/Account'
import Students from '../student-module/Students'
import StudentsRegister from '../student-module/StudentsRegister'
import StudentsRegistered from '../student-module/StudentsRegistered'

const NavBar = (props) => {
    
    return (
        <>
            <Route path="/" component={Home} />
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/account" component={Account} />
                <Route path="/students" component={Students} exact />
                <Route path="/students/register" component={StudentsRegister} />
                <Route path="/students/learners" component={StudentsRegistered} />
            </Switch>
        </>
    )
}

export default NavBar