import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Typography } from '@mui/material'

import EachLecture from './EachLecture'
import Player from '../../Common-Comp/Player'
import MoreDetails from '../../Common-Comp/MoreDetails'
import MediaHeaders from '../../Common-Comp/MediaHeaders'

const StudentLecturesPlayer = (props) => {
    const { course, lecture, lecturesData, handleClick } = props

    return (
        <>
            { Object.keys(lecture).length > 0 && (
                <MediaHeaders 
                    name={course.name} 
                    students={lecture.students} 
                    lectureId={lecture._id}
                />
            )}
            <Grid container >
                <Grid item md={2} bgcolor="lightgray">
                    <Typography variant="h6" >Contents:</Typography>
                    { lecturesData.map((lecture) => {
                        return (
                            <EachLecture 
                                key={lecture._id} 
                                id={lecture._id} 
                                title={lecture.title} 
                                handleClick={handleClick} 
                            />
                            )
                        }) }
                </Grid>
                <Grid item md={10}>
                    { Object.keys(lecture).length > 0 && (
                        <Player fileType={lecture.assetType} url={lecture.assetURL} />
                        ) }
                    <MoreDetails {...lecture} />
                </Grid>
            </Grid>
            <Link className="goback" to='/student/mycourses' >Go Back 🔙</Link>
        </>
    )
}

export default StudentLecturesPlayer