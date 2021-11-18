import React, { useState } from 'react'
import { ListItem,ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'

import ViewStudent from './ViewStudent'
import ButtonComp from '../common-comp/ButtonComp'

const StudentsList = (props) => {
    const { id, name, studentsData } = props

    const [ student, setStudent ] = useState([])
    const [ show, setShow ] = useState(false)

    const handleShow = (id) => {
        const result = studentsData.find((stud) => {
            return stud._id === id
        })
        setShow(true)
        setStudent(result)
    }

    const handleShowClose = () => {
        setShow(false)
    }

    const handleDelete = () => {
        console.log('dele')
    }

    const handleEdit = () => {
        console.log('edit')
    }

    return (
        <>
            <ListItem key={id}>
                <ListItemText primary={name} />
                <ButtonComp handleClick={() => handleShow(id)} title="More Details" color="secondary" size="small" />
                <DeleteIcon onClick={handleDelete} />
                <EditIcon onCLick={handleEdit} />
            </ListItem>
            <ViewStudent student={student} show={show} handleShowClose={handleShowClose} /> 
        </>
    )
}

export default StudentsList