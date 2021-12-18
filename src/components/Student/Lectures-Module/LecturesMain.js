import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import { allLectures, startGetAllLectures } from '../../../actions/lectureAction'

import Loader from '../../Reusable-Comp/Loader'
import StudentLecturesPlayer from './StudentLecturesPlayer'

const LecturesMain = (props) => {
    const { id : courseId } = props.match.params
    const [ lecture, setLecture ] = useState({})

    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return [ state.lectures, state.student.data ]
    })

    const [ lectData, courseData ] = data
    const { isLoading, data : lecturesData } = lectData

    useEffect(() => {
        if( courseId ){
            dispatch(startGetAllLectures(courseId))
        }

        return () => {
            dispatch(allLectures([]))
        }
    },[])

    useEffect(() => {
        if( lecturesData.length > 0 ){
            setLecture(lecturesData[0])
        }
    },[lecturesData])

    const handleClick = (id) => {
        const result = lecturesData.find((lecture) => {
            return lecture._id === id
        })
        setLecture(result)
    } 

    const course = courseData.find((course) => {
        return course._id === courseId
    })

    return (
        <>
            { isLoading ? (
                <Loader />
            ) : (
                <>
                    { lecturesData.length > 0 ? (
                        <>
                            <StudentLecturesPlayer 
                                lecture={lecture} 
                                course={course} 
                                lecturesData={lecturesData} 
                                handleClick={handleClick} 
                            />
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