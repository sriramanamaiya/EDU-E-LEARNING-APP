import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { IconButton, TableCell } from '@mui/material'
import { useDispatch } from 'react-redux'

import { startDeleteStudent } from '../../../actions/studentsAction'

import EditModal from '../../Reusable-Comp/EditModal'

const EachStudent = (props) => {
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
                <IconButton onClick={handleDelete} >
                    <DeleteIcon/>
                </IconButton>
            </TableCell>
            <TableCell align="center">
                <IconButton onClick={handleEdit} >
                    <EditIcon/>
                </IconButton>
                <EditModal show={show} handleShowClose={handleShowClose} id={id} name={name} email={email} allowed={allowed} />
            </TableCell>
        </>
    )
}

export default EachStudent