import React, { useEffect } from 'react'
import { Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { startGetAllLectures } from '../../../actions/lectureAction'
import LecturesNotFound from './LecturesNotFound'

const LecturesContainer = (props) => {
    const { id } = props.match.params
    console.log(id)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetAllLectures(id))
    },[])
    
    const courseData = useSelector((state) => {
        return state.course.data
    })
    console.log(courseData)

    const find = courseData.find((ele) => {
        return ele._id === id
    })

    console.log(find)

    return (
        <>
            <Typography variant="h5">{find.name}</Typography>
            <LecturesNotFound id={id}/>
        </>
    )
}

export default LecturesContainer