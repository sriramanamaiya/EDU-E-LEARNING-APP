import React from 'react'
import ReactPlayer from 'react-player'
import { Box } from '@mui/system'

const MediaPlayer = (props) => {
    const { url } = props

    return (
        <Box sx={{ display : 'flex' , alignItems : 'center', justifyContent : 'center' }}>
            <ReactPlayer controls url={url} />
        </Box>
    )
}

export default MediaPlayer