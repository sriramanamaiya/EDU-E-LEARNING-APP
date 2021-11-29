import React from 'react'
import { Link } from 'react-router-dom'
import { Typography, Box } from '@mui/material'
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import Heading from '../../Reusable-Comp/Heading'

const StudentsTableHeaders = (props) => {
    const { studentsData } = props

    return (
        <>
            <Box sx={{ display: 'flex', alignItems : 'center', justifyContent: 'space-between'}}>
                <Heading type="h4" title={`Registered Students 🧑‍🎓 - (${studentsData.length})`} />
                <Typography variant="body1" >
                    <Link to="/admin/students/register">
                        Register a New Student 
                            <IconButton color="inherit" > 
                                <AddIcon /> 
                            </IconButton>
                        </Link>
                </Typography>
            </Box>
        </>
    )
}

export default StudentsTableHeaders