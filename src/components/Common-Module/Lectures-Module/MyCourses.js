import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'

import { startGetStudentEnrolledCourses } from '../../../actions/courseAction'

import Heading from '../../Reusable-Comp/Heading'
import EachCourseCard from './EachCourseCard'

const MyCourses = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetStudentEnrolledCourses())
    },[])

    const courseData = useSelector((state) => {
        return state.courses.data
    })

    return (
        <>
            <Heading type="h3" title={`My Courses - ${courseData.length}`} />
            <Grid container direction="row" justifyContent="space-around" alignItems="center" marginTop={2}>
                { courseData.map((course) => {
                    return (
                        <EachCourseCard key={course._id} {...course} />
                    )
                })}
            </Grid>
        </>
    )
}

export default MyCourses