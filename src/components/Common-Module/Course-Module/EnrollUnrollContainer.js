import React, { useState } from 'react'
import AddTaskIcon from '@mui/icons-material/AddTask'
import { TableCell } from '@mui/material'
import { IconButton } from '@mui/material'
import EditModal from '../../Reusable-Comp/EditModal'
import EnrollCourses from './EnrollCourses'

const EnrollUnrollContainer = (props) => {
    const { id }= props
    const [ show, setShow ] = useState(false)

    const handleShowClose = () => {
        setShow(false)
    }

    const handleShow = () => {
        setShow(true)
    }

    return (
        <>
            <TableCell align="center">
                <IconButton color="inherit" onClick={handleShow} > 
                    <AddTaskIcon/>
                </IconButton>
            </TableCell>
            <EditModal 
                show={show} 
                handleShowClose={handleShowClose} 
                component={<EnrollCourses courseId={id} />} 
            />
        </>
    )
}

export default EnrollUnrollContainer