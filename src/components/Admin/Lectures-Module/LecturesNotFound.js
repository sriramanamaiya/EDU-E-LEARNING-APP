import React, { useState } from 'react'
import { Paper, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

import Modal from '../../Reusable-Comp/Modal'
import CreateEditLectures from './CreateEditLectures'

const LecturesNotFound = (props) => {
    const { courseId } = props
    const [ show, setShow ] = useState(false)

    const handleClick = () => {
        setShow(true)        
    }

    const handleShowClose = () => {
        setShow(false)
    }

    return (
        <>
            <Paper square={true} elevation={3}>
                <Typography variant="h5">
                    No Lectures Found. Add Your First Lecture. <Link to="#" onClick={handleClick} className='lecture-notfound'>Click here 👇</Link>
                </Typography>
            </Paper>
            <Modal 
                show={show} 
                handleShowClose={handleShowClose} 
                component={<CreateEditLectures 
                    courseId={courseId} 
                    handleShowClose={handleShowClose} 
                />} 
            />
        </>
    )
}

export default LecturesNotFound