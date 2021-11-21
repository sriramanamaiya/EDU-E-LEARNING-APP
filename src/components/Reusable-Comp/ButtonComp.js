import React from 'react'

import { Button } from '@mui/material'

const ButtonComp = (props) => {
    const { variant, handleClick, title, size, color, sx } = props

    return (
        <Button variant={variant} onClick={handleClick} size={size} color={color} sx={{sx}} >{title}</Button>
    )
}

export default ButtonComp