import React, { useState } from 'react'
import { IconButton, TableCell } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'

import { startDeleteLecture } from '../../../actions/lectureAction'

import Modal from '../../Reusable-Comp/Modal'
import CreateEditLectures from './CreateEditLectures'

const EditDeleteLecture = (props) => {
    const { _id, course } = props
    const [ show, setShow ] = useState(false)

    const dispatch = useDispatch()

    const handleEdit = () => {
        setShow(true)
    }

    const handleShowClose = () => {
        setShow(false)
    }

    const handleDelete = () => {
        const confirmation = window.confirm('Are You Sure')
        if( confirmation ){
            dispatch(startDeleteLecture(course,_id))
        }
    }

    return (
        <>
            <TableCell align="left">
                <IconButton color="inherit" onClick={handleEdit} >
                    <EditIcon/>
                </IconButton>
                <Modal 
                    show={show} 
                    handleShowClose={handleShowClose} 
                    component={<CreateEditLectures {...props} handleShowClose={handleShowClose} />} />
            </TableCell>
            <TableCell align="left">
                <IconButton color="inherit" onClick={handleDelete} >
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
        </>
    )
}

export default EditDeleteLecture