import React from 'react'
import { Route, Switch } from 'react-router'
import { useSelector } from 'react-redux'

import NavBar from './NavBar'
import Home from '../Homepage/Home'
import RegisterEdit from '../Admin/admin-auth/RegisterEdit'
import LoginPage from '../Homepage/LoginPage'
import Account from '../Admin/admin-auth/Account'
import StudentsRegisterAndEdit from '../Admin/student-module/StudentsRegisterAndEdit'
import StudentsContainer from '../Admin/student-module/StudentsContainer'
import Dashboard from '../Admin/Dashboard-module/Dashboard'
import CourseRegister from '../Admin/Course-Module/CourseRegister'
import CourseContainer from '../Admin/Course-Module/CourseContainer'
import PrivateRoute from './PrivateRoute'
import NotFound from '../Homepage/NotFound'

const RouteComp = (props) => {

    const loggedIn = useSelector((state) => {
        return [ state.admin.isLoggedIn, state.student.studentLoggedIn ]
    })

    const [ adminLoggedIn, studentLoggedIn ] = loggedIn
    
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/register" component={RegisterEdit} />
                <Route path="/login" component={LoginPage} />
                <PrivateRoute path="/admin/dashboard" isLoggedIn={adminLoggedIn} component={<Dashboard/>} />
                <PrivateRoute path="/admin/account" isLoggedIn={adminLoggedIn} component={<Account/>} />
                <PrivateRoute path="/admin/students" isLoggedIn={adminLoggedIn} component={<StudentsContainer/>} exact={true} />
                <PrivateRoute path="/admin/students/register" isLoggedIn={adminLoggedIn} component={<StudentsRegisterAndEdit/>} />
                <PrivateRoute path="/admin/course" isLoggedIn={adminLoggedIn} component={<CourseContainer/>} exact={true} />
                <PrivateRoute path="/admin/course/create" isLoggedIn={adminLoggedIn} component={<CourseRegister/>} />
                <Route path="*" component={NotFound} />
            </Switch>
        </>
    )
}

export default RouteComp