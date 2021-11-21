import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import { IconButton } from '@mui/material'

import { startGetAllStudents } from '../../actions/studentsAction'

import Heading from '../common-comp/Heading'
import StudentsList from './StudentsList'

const StudentsRegistered = (props) => {
    const dispatch = useDispatch()

    const studentsData = useSelector((state) => {
        return state.students.data
    })

    useEffect(() => {
        dispatch(startGetAllStudents(localStorage.getItem('token')))
    },[])

    return (
        <div>
            <Box sx={{ display: 'flex', alignItems : 'center', justifyContent: 'space-between'}}>
                <Heading type="h4" title={`Registered Students 🧑‍🎓 - (${studentsData.length})`} />
                <Typography variant="body1" ><Link to="/admin/students/register">Register a New Student <IconButton > <AddIcon /> </IconButton></Link></Typography>
            </Box>
            <StudentsList studentsData={studentsData} />
        </div>
    )
}

export default StudentsRegistered