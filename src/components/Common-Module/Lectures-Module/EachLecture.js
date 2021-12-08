import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo'

const EachLecture = (props) => {
    const { id, title, handleClick } = props

    return (
        <Box>
            <Link to="#" onClick={() => handleClick(id)}><OndemandVideoIcon fontSize="inherit" /> {title}</Link>
        </Box>
    )
}

export default EachLecture