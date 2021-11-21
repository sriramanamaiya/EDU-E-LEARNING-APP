import React from 'react'
import { Route, Switch } from 'react-router'

import Home from './Home'
import RegisterEdit from '../Admin/admin-auth/RegisterEdit'
import Account from '../Admin/admin-auth/Account'
import StudentsRegister from '../Admin/student-module/StudentsRegister'
import StudentsContainer from '../Admin/student-module/StudentsContainer'
import LoginPage from '../Homepage/LoginPage'
import Dashboard from '../Admin/student-module/Dashboard'

const RouteComp = (props) => {
    
    return (
        <>
            <Route path="/" component={Home} />
            <Switch>
                <Route path="/register" component={RegisterEdit} />
                <Route path="/login" component={LoginPage} />
                <Route path="/admin/dashboard" component={Dashboard} />
                <Route path="/admin/account" component={Account} />
                <Route path="/admin/students" component={StudentsContainer} exact />
                <Route path="/admin/students/register" component={StudentsRegister} />
                <Route path="/admin/course" component={Dashboard} />
            </Switch>
        </>
    )
}

export default RouteComp