import React from 'react'
import { Grid } from '@mui/material'

import StatsItem from './StatsItem'

const OverallStatsContainer = (props) => {
    const { admin, courses, adminStudents, students } = props
    
    return (
        <>
            { admin.role === 'admin' ? (
                <Grid container spacing={6}>
                    <StatsItem title="Total Courses" number={courses.length} md={12}/>
                    <StatsItem title="Total Students Registered" number={adminStudents.length} md={12}/>
                </Grid>
            )  : (
                <Grid container spacing={6}>
                    <StatsItem title="Total Courses" number={courses.length} md={12}/>
                    <StatsItem title="Enrolled Courses" number={students.length} md={12}/>
                </Grid>
            )}
        </>
    )
}

export default OverallStatsContainer