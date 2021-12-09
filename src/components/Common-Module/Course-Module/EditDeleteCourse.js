import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IconButton, TableCell } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

import { startDeleteCourse } from '../../../actions/courseAction'

import Modal from '../../Reusable-Comp/Modal'
import CourseRegisterEdit from './CourseRegisterEdit'

const EditDeleteCourse = (props) => {
    const {  _id } = props
    const [ show, setShow ] = useState(false)

    const dispatch = useDispatch()

    const handleShowClose = () => {
        setShow(false)
    }

    const handleEdit = () => {
        setShow(true)
    }

    const handleDelete = () => {
        const confirmation = window.confirm('Are You Sure You want delete')
        if( confirmation ){
           dispatch(startDeleteCourse(_id))
        }
    }

    return (
        <>
            <TableCell align="center">
                <IconButton color="inherit" onClick={handleEdit} >
                    <EditIcon/>
                </IconButton>
            </TableCell>
            <TableCell align="center">
                <IconButton color="inherit" onClick={handleDelete} >
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
            <Modal 
                show={show} 
                handleShowClose={handleShowClose} 
                component={<CourseRegisterEdit handleShowClose={handleShowClose} {...props} />} 
            />
        </>
    )
}

export default EditDeleteCourse