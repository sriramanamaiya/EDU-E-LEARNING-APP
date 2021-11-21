import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './Home'
import RegisterEdit from '../admin-auth/RegisterEdit'
import Account from '../admin-auth/Account'
import StudentsRegister from '../student-module/StudentsRegister'
import StudentsRegistered from '../student-module/StudentsRegistered'

import LoginPage from '../Homepage/LoginPage'
import Dashboard from './Dashboard'

const NavBar = (props) => {
    
    return (
        <>
            <Route path="/" component={Home} />
            <Switch>
                <Route path="/register" component={RegisterEdit} />
                <Route path="/login" component={LoginPage} />
                <Route path="/admin/dashboard" component={Dashboard} />
                <Route path="/admin/account" component={Account} />
                <Route path="/admin/students" component={StudentsRegistered} exact />
                <Route path="/admin/students/register" component={StudentsRegister} />
            </Switch>
        </>
    )
}

export default NavBar