import React from 'react'
import { Route, Switch } from 'react-router'

import NavBar from './NavBar'
import Home from '../Homepage/Home'
import RegisterEdit from '../Admin/Admin-Auth/RegisterEdit'
import LoginPage from '../Homepage/LoginPage'
import Account from '../Admin/Admin-Auth/Account'
import StudentsRegisterAndEdit from '../Admin/Student-Module/StudentsRegisterAndEdit'
import StudentsContainer from '../Admin/Student-Module/StudentsContainer'
import Dashboard from '../Admin/Dashboard-Module/Dashboard'
import CourseRegister from '../Admin/Course-Module/CourseRegister'
import CourseContainer from '../Admin/Course-Module/CourseContainer'
import NotFound from '../Homepage/NotFound'
import PrivateRouteAdmin from './PrivateRouteAdmin'

const RouteComp = (props) => {

    return (
        <>  
            <NavBar />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/register" component={RegisterEdit} />
                <Route path="/login" component={LoginPage} />
                <PrivateRouteAdmin path="/admin/dashboard"  Component={Dashboard} />
                <PrivateRouteAdmin path="/admin/account" Component={Account} />
                <PrivateRouteAdmin path="/admin/students" Component={StudentsContainer} exact={true} />
                <PrivateRouteAdmin path="/admin/students/register" Component={StudentsRegisterAndEdit} />
                <PrivateRouteAdmin path="/admin/courses" Component={CourseContainer} exact={true} />
                <PrivateRouteAdmin path="/admin/courses/new" Component={CourseRegister} />
                <Route path="*" component={NotFound} />
            </Switch>
        </>
    )
}

export default RouteComp