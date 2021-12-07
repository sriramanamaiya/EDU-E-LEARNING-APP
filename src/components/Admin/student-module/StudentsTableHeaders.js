import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Typography, Box, Card, CardContent } from '@mui/material'
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import Heading from '../../Reusable-Comp/Heading'
import EditModal from '../../Reusable-Comp/EditModal'
import StudentsRegisterAndEdit from './StudentsRegisterAndEdit'
import ButtonComp from '../../Reusable-Comp/ButtonComp'

const StudentsTableHeaders = (props) => {
    const { studentsData } = props
    const [ show, setShow ] = useState(false)

    const handleShow = () => {
        setShow(true)
    }

    const handleShowClose = () => {
        setShow(false)
    }

    return (
        <>
            { studentsData.length === 0 ? (
                <Card sx={{ mt : 6 }}>
                    <CardContent sx={{ display : "flex", justifyContent : "space-around" }}>
                        <Typography variant="h5" >No Students found add Student </Typography>
                        <ButtonComp variant="contained" title="Add Student" endIcon={<AddIcon />} handleClick={handleShow} />
                    </CardContent>
                </Card>
            ) : (
                <>
                    <Box sx={{ display: 'flex', alignItems : 'center', justifyContent: 'space-between'}}>
                        <Heading type="h4" title={`Registered Students 🧑‍🎓 - (${studentsData.length})`} />
                        <IconButton color="inherit" onClick={handleShow}> 
                            <Typography variant="body1" >Register a New Student</Typography>
                            <AddIcon />
                        </IconButton>
                    </Box>
                </>
            ) }
            <EditModal 
                show={show} 
                handleShowClose={handleShowClose} 
                component={<StudentsRegisterAndEdit handleShowClose={handleShowClose} />} 
            />
        </>
    )
}

export default StudentsTableHeaders