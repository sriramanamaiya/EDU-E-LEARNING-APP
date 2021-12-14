import React from 'react'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'

import Heading from '../../Reusable-Comp/Heading'
import EachCourseCard from './EachCourseCard'

const MyCourses = (props) => {
    const courseData = useSelector((state) => {
        return state.courses.data
    })

    return (
        <>
            <Heading type="h3" title={`My Courses - ${courseData.length}`} />
            <Grid container gap={2} marginTop={2}>
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