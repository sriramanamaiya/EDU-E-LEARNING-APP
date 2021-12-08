import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { allLectures, startGetAllLectures } from '../../../actions/lectureAction'

import MediaPlayer from '../../Admin/Lectures-Module/MediaPlayer'
import EachLecture from './EachLecture'
import Heading from '../../Reusable-Comp/Heading'
import { Grid, Typography } from '@mui/material'
import MediaDescription from '../../Admin/Lectures-Module/MediaDescription'

const LecturesMain = (props) => {
    const { id : courseId } = props.match.params
    const [ course, setCourse ] = useState({})
    const [ lecture, setLecture ] = useState({})

    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return [ state.lectures.data, state.courses.data ]
    })

    const [ lecturesData, courseData ] = data
    console.log(lecturesData)
    
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
        <div>
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
        </div>
    )
}

export default LecturesMain