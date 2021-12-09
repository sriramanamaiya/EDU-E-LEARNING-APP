import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { allLectures, startGetAllLectures } from '../../../actions/lectureAction'

import MediaPlayer from '../../Common-Comp/MediaPlayer'
import EachLecture from './EachLecture'
import Heading from '../../Reusable-Comp/Heading'
import MediaDescription from '../../Admin/Lectures-Module/MediaDescription'
import Loader from '../../Reusable-Comp/Loader'

const LecturesMain = (props) => {
    const { id : courseId } = props.match.params
    const [ course, setCourse ] = useState({})
    const [ lecture, setLecture ] = useState({})

    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return [ state.lectures, state.courses.data ]
    })

    const [ lectData, courseData ] = data
    const { isLoading, data : lecturesData } = lectData
    
    useEffect(() => {
        if( courseId ){
            dispatch(startGetAllLectures(courseId))
            setCourse(findCourse(courseId))
        }

        return () => {
            dispatch(allLectures([]))
        }
    },[])

    useEffect(() => {
        if( Object.keys(lecturesData).length > 0 ){
            setLecture(lecturesData[0])
        }
    },[lecturesData])

    const findCourse = (id) => {
        const result = courseData.find((course) => {
            return course._id === id
        })
        return result
    }

    const handleClick = (id) => {
        const result = lecturesData.find((lecture) => {
            return lecture._id === id
        })
        setLecture(result)
    } 

    return (
        <>
            { isLoading ? (
                <Loader />
            ) : (
                <>
                    { lecturesData.length > 0 ? (
                        <>
                            { course && <Heading type="h3" title={`${course.name}`} /> }
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
                                        <MediaPlayer url={lecture.assetURL} />
                                        ) }
                                    <MediaDescription description={lecture.description} />
                                </Grid>
                            </Grid>
                        </>
                    ) : (
                        <Typography variant="h6" sx={{ mt : 2 }} >No Lectures Added By Admin. <Link to="/student/mycourses" >Go Back🔙</Link></Typography>
                    ) }
                </>
            ) }
        </>
    )
}

export default LecturesMain