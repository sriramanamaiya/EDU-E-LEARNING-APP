import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './Home'
import Register from '../admin-auth/Register'
import Account from '../admin-auth/Account'
import Students from '../student-module/Students'
import StudentsRegister from '../student-module/StudentsRegister'
import StudentsRegistered from '../student-module/StudentsRegistered'

import LoginPage from '../Homepage/LoginPage'
import Dashboard from './Dashboard'

const NavBar = (props) => {
    
    return (
        <>
            <Route path="/" component={Home} />
            <Switch>
                <Route path="/register" component={Register} />
                <Route path="/login" component={LoginPage} />
                <Route path="/admin/dashboard" component={Dashboard} />
                <Route path="/admin/account" component={Account} />
                <Route path="/admin/students" component={Students} exact />
                <Route path="/admin/students/register" component={StudentsRegister} />
                <Route path="/admin/students/learners" component={StudentsRegistered} />
            </Switch>
        </>
    )
}

export default NavBar