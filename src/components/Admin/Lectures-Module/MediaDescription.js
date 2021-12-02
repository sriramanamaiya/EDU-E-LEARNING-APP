import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const MediaDescription = (props) => {
    const { description } = props

    return (
        <Box sx={{ display : 'flex' , justifyContent : 'center' , mt : 2 }}>
            <Typography variant="caption" color="inherit">Description : {description}</Typography>
        </Box>
    )
}

export default MediaDescription