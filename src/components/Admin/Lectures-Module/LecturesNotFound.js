import { Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EditModal from '../../Reusable-Comp/EditModal'
import CreateLectures from './CreateLectures'

const LecturesNotFound = (props) => {
    const { id } = props
    const [ show, setShow ] = useState(false)

    const handleClick = () => {
        setShow(true)        
    }

    const handleShowClose = () => {
        setShow(false)
    }

    return (
        <>
            <Typography variant="h5">
                No Lectures Found. Add Your First Lecture. <Link to="#" onClick={handleClick} >Click here 👇</Link>
            </Typography>
            <EditModal show={show} handleShowClose={handleShowClose} component={<CreateLectures id ={id} />} />
        </>
    )
}

export default LecturesNotFound