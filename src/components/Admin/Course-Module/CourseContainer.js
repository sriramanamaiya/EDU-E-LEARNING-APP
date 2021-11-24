import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { startGetAllCourse } from '../../../actions/courseAction'
import CourseTable from './CourseTable'

const CourseContainer = (props) => {
    const dispatch = useDispatch()

    const courseData = useSelector((state) => {
        return state.course.data
    })

    useEffect(() => {
        dispatch(startGetAllCourse())
    },[])

    return (
        <div>
            <CourseTable courseData={courseData} />
        </div>
    )
}

export default CourseContainer