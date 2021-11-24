import React from 'react'
import { Route, Switch } from 'react-router'

import Home from '../Homepage/Home'
import RegisterEdit from '../Admin/admin-auth/RegisterEdit'
import Account from '../Admin/admin-auth/Account'
import StudentsRegisterAndEdit from '../Admin/student-module/StudentsRegisterAndEdit'
import StudentsContainer from '../Admin/student-module/StudentsContainer'
import LoginPage from '../Homepage/LoginPage'
import Dashboard from '../Admin/Dashboard-module/Dashboard'
import CourseRegister from '../Admin/Course-Module/CourseRegister'

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
                <Route path="/admin/students/register" component={StudentsRegisterAndEdit} />
                <Route path="/admin/course" component={CourseRegister} />
            </Switch>
        </>
    )
}

export default RouteComp