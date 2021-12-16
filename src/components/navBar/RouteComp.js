import React from 'react'
import { Route, Switch } from 'react-router'

import NavBar from './NavBar'
import Home from '../Homepage/Home'
import RegisterEdit from '../Admin/Admin-Auth/RegisterEdit'
import LoginPage from '../Homepage/LoginPage'
import Account from '../Common-Comp/Account'
import StudentsRegisterAndEdit from '../Admin/Student-Module/StudentsRegisterAndEdit'
import StudentsContainer from '../Admin/Student-Module/StudentsContainer'
import Dashboard from '../Common-Module/Dashboard-Module/Dashboard'
import CourseContainer from '../Common-Module/Course-Module/CourseContainer'
import NotFound from '../Homepage/NotFound'
import PrivateRouteAdmin from './PrivateRouteAdmin'
import PrivateRouteStudent from './PrivateRouteStudent'
import LecturesContainer from '../Admin/Lectures-Module/LecturesContainer'
import MediaContainer from '../Admin/Lectures-Module/MediaContainer'
import CourseDashboard from '../Common-Module/Course-Module/CourseDashboard'
import MyCourses from '../Student/Lectures-Module/MyCourses'
import LecturesMain from '../Student/Lectures-Module/LecturesMain'

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
                <PrivateRouteAdmin path="/admin/courses/:id" Component={LecturesContainer} />
                <PrivateRouteAdmin path="/admin/lecture/:id" Component={MediaContainer}/>

                <PrivateRouteStudent path="/student/courses" Component={CourseDashboard} exact={true} />
                <PrivateRouteStudent path="/student/courses/enroll-unenroll" Component={CourseContainer} />
                <PrivateRouteStudent path="/student/mycourses" Component={MyCourses} />
                <PrivateRouteStudent path="/student/lectures/:id" Component={LecturesMain} exact={true} />
                <PrivateRouteStudent path="/student/dashboard" Component={Dashboard} />
                <PrivateRouteStudent path="/student/account" Component={Account} />
                <Route path="*" component={NotFound} />
            </Switch>
        </>
    )
}

export default RouteComp