import React, { useState } from 'react'
import { IconButton, TableCell } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'

import { startDeleteLecture } from '../../../actions/lectureAction'

import EditModal from '../../Reusable-Comp/EditModal'
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
        dispatch(startDeleteLecture(course,_id))
    }

    return (
        <>
            <TableCell>
                <IconButton color="inherit" onClick={handleEdit} >
                    <EditIcon/>
                </IconButton>
                <EditModal 
                    show={show} 
                    handleShowClose={handleShowClose} 
                    component={<CreateEditLectures {...props} handleShowClose={handleShowClose} />} />
            </TableCell>
            <TableCell>
                <IconButton color="inherit" onClick={handleDelete} >
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
        </>
    )
}

export default EditDeleteLecture