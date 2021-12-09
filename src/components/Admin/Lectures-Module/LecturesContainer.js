import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

import { startGetAllLectures } from '../../../actions/lectureAction'

import LecturesNotFound from './LecturesNotFound'
import LecturesTable from './LecturesTable'
import LecturesHeader from './LecturesHeader'
import Loader from '../../Reusable-Comp/Loader'

const LecturesContainer = (props) => {
    const { id: courseId } = props.match.params

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetAllLectures(courseId))
    },[])
    
    const data = useSelector((state) => {
        return [ state.courses.data, state.lectures ]
    })

    const [ courseData, lectures ] = data
    const { isLoading,  data : lecturesData } = lectures

    const findCourse = courseData.find((ele) => {
        return ele._id === courseId
    })

    return (
        <>
            { isLoading ? (
                <Loader />
            ) : (
                <Box sx={{ mt : 2 }}>
                    <LecturesHeader findCourse={findCourse} courseId={courseId} lecturesData={lecturesData} />
                    { lecturesData.length === 0  ? (
                        <LecturesNotFound courseId={courseId}/>
                    ) : ( 
                        <LecturesTable lecturesData={lecturesData} />
                    )}
                </Box>
            ) }
        </>
    )
}

export default LecturesContainer