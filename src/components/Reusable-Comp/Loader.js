import React from 'react'
import { CircularProgress, Box } from '@mui/material'

const Loader = (props) => {
    
    return (
        <Box sx={{display: 'flex', justifyContent : 'center' , mt : 30}}>
            <CircularProgress />
        </Box>
    )
}

export default Loader