import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IconButton, TableCell } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import { startDeleteStudent } from '../../../actions/adminstudentsAction'

import Modal from '../../Reusable-Comp/Modal'
import StudentsRegisterAndEdit from './StudentsRegisterAndEdit'

const EditAndDeleteStudents = (props) => {
    const {  id, name, email, allowed } = props
    const [ show, setShow ] = useState(false)

    const dispatch = useDispatch()

    const handleShowClose = () => {
        setShow(false)
    }

    const handleDelete = () => {
        const confirmation = window.confirm('Are You Sure You want delete')
        if( confirmation ){
            dispatch(startDeleteStudent(id))
        }
    }

    const handleEdit = () => {
        setShow(true)
    }

    return (
        <>
            <TableCell align="center">
                <IconButton color="inherit" onClick={handleDelete} >
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
            <TableCell align="center">
                <IconButton color="inherit" onClick={handleEdit} >
                    <EditIcon/>
                </IconButton>
            </TableCell>
            <Modal 
                show={show} 
                handleShowClose={handleShowClose} 
                component={
                    <StudentsRegisterAndEdit 
                        id={id} 
                        name={name} 
                        email={email} 
                        allowed={allowed} 
                        handleShowClose={handleShowClose} 
                    />
                } 
            />
        </>
    )
}

export default EditAndDeleteStudents