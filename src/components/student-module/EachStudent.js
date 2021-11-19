import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import { IconButton } from '@mui/material'
import { useDispatch } from 'react-redux'

import { startDeleteStudent } from '../../actions/studentsAction'

import EditModal from './EditModal'

const EachStudent = (props) => {
    const {  id, name, email, allowed } = props
    const [ show, setShow ] = useState(false)

    const dispatch = useDispatch()

    const handleShowClose = () => {
        setShow(false)
    }

    const handleDelete = () => {
        console.log('dele')
        const confirmation = window.confirm('Are You Sure Yuu want delete')
        if( confirmation ){
            dispatch(startDeleteStudent(id))
        }
    }

    const handleEdit = () => {
        console.log('edit')
        setShow(true)
    }

    return (
        <>
            <IconButton onClick={handleDelete} >
                <DeleteIcon/>
            </IconButton>
            <IconButton onClick={handleEdit} >
                <EditIcon/>
            </IconButton>
            <EditModal show={show} handleShowClose={handleShowClose} id={id} name={name} email={email} allowed={allowed} />
        </>
    )
}

export default EachStudent