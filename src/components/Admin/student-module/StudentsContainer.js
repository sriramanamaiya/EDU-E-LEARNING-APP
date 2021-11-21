import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import { IconButton } from '@mui/material'

import { startGetAllStudents } from '../../../actions/studentsAction'

import Heading from '../../Reusable-Comp/Heading'
import StudentsTable from './StudentsTable'

const StudentsContainer = (props) => {
    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return [state.students.data, state.admin.isLoading]
    })

    const [ studentsData, isLoading ] = data

    useEffect(() => {
        dispatch(startGetAllStudents(localStorage.getItem('token')))
    },[])

    return (
        <div>
            { !isLoading && (
                <>
                    <Box sx={{ display: 'flex', alignItems : 'center', justifyContent: 'space-between'}}>
                    <Heading type="h4" title={`Registered Students 🧑‍🎓 - (${studentsData.length})`} />
                    <Typography variant="body1" >
                        <Link to="/admin/students/register">
                            Register a New Student 
                                <IconButton > 
                                    <AddIcon /> 
                                </IconButton>
                            </Link>
                    </Typography>
                    </Box>
                    <StudentsTable studentsData={studentsData} /> 
                </>
            ) }
        </div>
    )
}

export default StudentsContainer