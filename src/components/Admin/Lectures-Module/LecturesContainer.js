import React, { useEffect } from 'react'
import { Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

import { startGetAllLectures } from '../../../actions/lectureAction'
import LecturesNotFound from './LecturesNotFound'
import LecturesTable from './LecturesTable'
import LecturesHeader from './LecturesHeader'

const LecturesContainer = (props) => {
    const { id: courseId } = props.match.params

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetAllLectures(courseId))
    },[])
    
    const data = useSelector((state) => {
        return [ state.courses.data, state.lectures.data ]
    })

    const [ courseData, lecturesData ] = data

    const findCourse = courseData.find((ele) => {
        return ele._id === courseId
    })

    return (
        <>
            <LecturesHeader findCourse={findCourse} courseId={courseId} lecturesData={lecturesData} />
            { lecturesData.length === 0  ? (
                <LecturesNotFound courseId={courseId}/>
            ) : ( 
                <LecturesTable lecturesData={lecturesData} />
            )}
        </>
    )
}

export default LecturesContainer