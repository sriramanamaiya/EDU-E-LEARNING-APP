import React, { useState } from 'react'
import { Typography, Box, Card, CardContent } from '@mui/material'
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import Heading from '../../Reusable-Comp/Heading'
import EditModal from '../../Reusable-Comp/EditModal'
import ButtonComp from '../../Reusable-Comp/ButtonComp'

const TableHeaders = (props) => {
    const { data, noDataTitle, buttonTitle, registerTitle, headingTitle, component : Component, userRole } = props
    const [ show, setShow ] = useState(false)

    const handleShow = () => {
        setShow(true)
    }

    const handleShowClose = () => {
        setShow(false)
    }

    return (
        <>
            { data.length === 0 ? (
                <Card sx={{ mt : 6 }}>
                    <CardContent sx={{ display : "flex", justifyContent : "space-around" }}>
                        <Typography variant="h5" >{noDataTitle}</Typography>
                        { userRole !== 'student' && (
                            <ButtonComp 
                                variant="contained" 
                                title={buttonTitle} 
                                endIcon={<AddIcon />} 
                                handleClick={handleShow} 
                            />
                        ) }
                    </CardContent>
                </Card>
            ) : (
                <>
                    <Box sx={{ display: 'flex', alignItems : 'center', justifyContent: 'space-between'}}>
                        <Heading type="h4" title={headingTitle} />
                        { userRole !== 'student' && (
                            <IconButton color="inherit" onClick={handleShow}> 
                                <Typography variant="body1" >{registerTitle}</Typography>
                                <AddIcon />
                            </IconButton>
                        ) }
                    </Box>
                </>
            ) }
            <EditModal 
                show={show} 
                handleShowClose={handleShowClose} 
                component={<Component handleShowClose={handleShowClose} />} 
            />
        </>
    )
}

export default TableHeaders