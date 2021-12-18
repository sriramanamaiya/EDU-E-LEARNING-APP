import React, { useState } from 'react'
import { Grid, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'

import { startGetAllLectures } from '../../../actions/lectureAction'

import CourseSelect from './CourseSelect'
import StatsItem from './StatsItem'
import Heading from '../../Reusable-Comp/Heading'
import Loader from '../../Reusable-Comp/Loader'

const CourseStatsContainer = (props) => {
    const { lecturesData, courses } = props
    const [ course, setCourse ] = useState({})
    const [ select, setSelect ] = useState('')

    const dispatch = useDispatch()

    const { isLoading, data : lectures } = lecturesData

    const findCourse = (id) => {
        const result = courses.find((ele) => {
            return ele._id === id
        })
        setCourse(result)
    }

    const handleSelect = (e) => {
        setSelect(e.target.value)
        dispatch(startGetAllLectures(e.target.value))
        findCourse(e.target.value)
    }

    return (
        <>
            <Heading type="h3" title="Course statistics 📊"/>
            <CourseSelect courses={courses} select={select} handleSelect={handleSelect}/>
            { select ? (
                <>
                    { isLoading ? (
                        <Loader mt={5} />
                    ) : (
                        <Grid container direction="row" justifyContent="space-around" alignItems="center">
                            <StatsItem title="Total Lectures" number={lectures.length} md={3}/>
                            <StatsItem title="Total Students Enrolled" number={course.students.length} md={3}/>
                            <StatsItem title="Total Duration of Course" number={course.duration} md={3}/>
                        </Grid>
                    ) }
                </>
            ) : (
                <Typography variant='body1'>Select Particular Course for Stats</Typography>
            )}
        </>
    )
}

export default CourseStatsContainer