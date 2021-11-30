import React, { useState } from 'react'
import { IconButton, TableCell } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'

import EditModal from '../../Reusable-Comp/EditModal'

import CreateLectures from './CreateLectures'

const EditLecture = (props) => {
    console.log(props)
    const [ show, setShow ] = useState(false)

    const handleEdit = () => {
        setShow(true)
    }

    const handleShowClose = () => {
        setShow(false)
    }

    return (
        <TableCell>
            <IconButton color="inherit" onClick={handleEdit} >
                <EditIcon/>
            </IconButton>
            <EditModal show={show} handleShowClose={handleShowClose} component={<CreateLectures handleShowClose={handleShowClose} />} />
        </TableCell>
    )
}

export default EditLecture