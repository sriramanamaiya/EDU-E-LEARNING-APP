import React from 'react'
import { Grid } from '@mui/material'
import { useSelector } from 'react-redux'

import Heading from '../../Reusable-Comp/Heading'
import ChartComp from './ChartComp'
import OverallStatsContainer from './OverallStatsContainer'
import CourseStatsContainer from './CourseStatsContainer'

const Dashboard = (props) => {
    const data = useSelector((state) => {
        return [ state.admin.data, state.courses.data, state.adminStudents.data, state.student.data, state.lectures ]
    })

    const [ admin, courses, adminStudents, students, lecturesData ] = data

    return (
        <>
            <Heading type="h3" title="Overall statistics 📊"/>
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <Grid container>
                        <Grid item md={4}>
                            <OverallStatsContainer 
                                admin={admin} 
                                courses={courses} 
                                adminStudents={adminStudents} 
                                students={students} 
                            />
                        </Grid>
                        <Grid item md={8}>
                            { courses.length !== 0 && <ChartComp courses={courses} /> }
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12}>
                    <CourseStatsContainer lecturesData={lecturesData} courses={courses} />
                </Grid>
            </Grid>
        </>
    )
}

export default Dashboard