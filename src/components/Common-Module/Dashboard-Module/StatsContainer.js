import React from 'react'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'
import StatsItem from './StatsItem'

const StatsContainer = (props) => {
    const data = useSelector((state) => {
        return [ state.admin.data, state.courses.data, state.adminStudents.data, state.student.data ]
    })

    const [ admin, courses, adminStudents, students ] = data

    return (
        <>
            { admin.role === 'admin' ? (
                <Grid container direction="row" justifyContent="space-around" alignItems="center">
                    <StatsItem title="Total Courses" number={courses.length} />
                    <StatsItem title="Total Students Registered" number={adminStudents.length} />
                </Grid>
            )  : (
                <Grid container direction="row" justifyContent="space-around" alignItems="center">
                    <StatsItem title="Total Courses" number={students.length} />
                    <StatsItem title="Enrolled Courses" number={courses.length} />
                </Grid>
            )}
        </>
    )
}

export default StatsContainer