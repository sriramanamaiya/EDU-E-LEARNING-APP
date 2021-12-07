import React from 'react'
import { Card, CardActions, CardContent, Typography } from '@mui/material'
import { Grid } from '@mui/material'
import { Link } from 'react-router-dom'

import coursecatalog from '../../../images/coursecatalog.png'
import mycoursesicon from '../../../images/mycoursesicon.png'
import Heading from '../../Reusable-Comp/Heading'

const CourseDashboard = (props) => {

    return (
        <>
            <Heading type="h3" title="What do you want to do today?"/>
            <Grid container direction="row" justifyContent="space-around" alignItems="center">
                <Card elevation={5} sx={{ width: 300, height : 300 }}>
                    <CardContent sx={{display : 'flex', justifyContent : 'center'  }}>
                        <img src={coursecatalog} alt="Course Catalog" width="300" height="200" />
                    </CardContent>
                    <CardActions  sx={{display : 'flex', justifyContent : 'center'  }}>
                    <Typography variant="h6">Enroll For Courses📕</Typography>
                        <Link to="/student/courses/enroll-unenroll">ENROLL</Link>
                    </CardActions>
                </Card>                
                <Card elevation={5} sx={{ width: 300, height : 300 }}>
                    <CardContent  sx={{display : 'flex', justifyContent : 'center'  }}>
                        <img src={mycoursesicon} alt="My Courses" width="300" height="200" />
                    </CardContent>
                    <CardActions  sx={{display : 'flex', justifyContent : 'center'  }}>
                        <Typography variant="h6">View My Courses📖</Typography>
                        <Link to="/student/mycourses">My Courses</Link>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default CourseDashboard