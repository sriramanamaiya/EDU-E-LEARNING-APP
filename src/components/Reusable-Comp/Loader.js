import React from 'react'
import { CircularProgress, Box } from '@mui/material'

const Loader = (props) => {
    const { mt } = props
    
    return (
        <Box sx={{display: 'flex', justifyContent : 'center' , mt : mt }}>
            <CircularProgress />
        </Box>
    )
}

export default Loader