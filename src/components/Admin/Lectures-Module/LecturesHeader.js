import React, { useState } from 'react'
import { Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'

import Modal from '../../Reusable-Comp/Modal'
import CreateEditLectures from './CreateEditLectures'

const LecturesHeader = (props) => {
    const { findCourse, courseId, lecturesData } = props
    const [ show, setShow ] = useState(false)

    const handleClick = () => {
        setShow(true)
    }

    const handleShowClose = () => {
        setShow(false)
    }

    return (
        <>
            { findCourse && (
                <>
                    <Box sx={{ display : 'flex', justifyContent : 'space-between' , mb : 2}}>
                        <Typography variant="h4" >{findCourse.name}</Typography>
                        { lecturesData.length > 0 && (
                            <>
                                <Link to="#" onClick={handleClick} >Click to Create new Lecture</Link>
                                <Modal 
                                    show={show} 
                                    handleShowClose={handleShowClose} 
                                    component={<CreateEditLectures 
                                        courseId={courseId} 
                                        handleShowClose={handleShowClose} 
                                    />} 
                                />
                            </>
                        ) }
                    </Box>
                </>
            ) }
        </>
    )
}

export default LecturesHeader