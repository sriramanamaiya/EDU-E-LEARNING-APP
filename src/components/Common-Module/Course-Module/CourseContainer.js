import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import CourseTable from './CourseTable'

const CourseContainer = (props) => {
    const [ userRole, setUserRole ] = useState('')

    const data = useSelector((state) => {
        return [state.course.data, state.student.data]
    })

    const [ courseData, studentData ] = data

    useEffect(() => {
        const role = localStorage.getItem('role')
        setUserRole(role)
    },[])

    return (
        <div>
            <CourseTable userRole={userRole} courseData={ userRole === 'admin' ? courseData : studentData } />
        </div>
    )
}

export default CourseContainer