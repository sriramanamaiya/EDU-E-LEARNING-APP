import React from 'react'
import { Route, Switch } from 'react-router'
import { useSelector } from 'react-redux'

import NavBar from './NavBar'
import Home from '../Homepage/Home'
import RegisterEdit from '../Admin/Admin-Auth/RegisterEdit'
import LoginPage from '../Homepage/LoginPage'
import Account from '../Admin/Admin-Auth/Account'
import StudentsRegisterAndEdit from '../Admin/Student-Module/StudentsRegisterAndEdit'
import StudentsContainer from '../Admin/Student-Module/StudentsContainer'
import Dashboard from '../Common-Module/Dashboard-Module/Dashboard'
import CourseRegister from '../Common-Module/Course-Module/CourseRegister'
import CourseContainer from '../Common-Module/Course-Module/CourseContainer'
import NotFound from '../Homepage/NotFound'
import PrivateRouteAdmin from './PrivateRouteAdmin'
import PrivateRouteStudent from './PrivateRouteStudent'
import CreateEditLectures from '../Admin/Lectures-Module/CreateEditLectures'
import LecturesContainer from '../Admin/Lectures-Module/LecturesContainer'
import MediaContainer from '../Admin/Lectures-Module/MediaContainer'
import MyCourses from '../Common-Module/Lectures-Module/MyCourses'
import CourseDashboard from '../Common-Module/Course-Module/CourseDashboard'

const RouteComp = (props) => {
    const loading = useSelector((state) => {
        return [ state.admin.isLoading, state.student.isLoading ]
    })

    const [ isLoading, studentIsLoading ] = loading

    return (
        <>  
            <NavBar />
            { !isLoading  && (
                <>
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
                        <PrivateRouteAdmin path="/admin/lectures/create" Component={CreateEditLectures} />
                        <PrivateRouteAdmin path="/admin/lectures/:id" Component={LecturesContainer} />
                        <PrivateRouteAdmin path="/admin/lecture/:id" Component={MediaContainer}/>
                        <PrivateRouteStudent path="/student/courses" studentIsLoading={studentIsLoading} Component={CourseDashboard} exact={true} />
                        <PrivateRouteStudent path="/student/courses/enroll-unenroll" studentIsLoading={studentIsLoading} Component={CourseContainer} />
                        <PrivateRouteStudent path="/student/mycourses" studentIsLoading={studentIsLoading} Component={MyCourses} />
                        <Route path="*" component={NotFound} />
                    </Switch>
                </>
            )}
        </>
    )
}

export default RouteComp