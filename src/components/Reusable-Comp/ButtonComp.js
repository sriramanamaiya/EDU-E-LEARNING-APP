import React from 'react'

import { Button } from '@mui/material'

const ButtonComp = (props) => {
    const { variant, handleClick, title, size, color, sx, endIcon } = props

    return (
        <Button variant={variant} onClick={handleClick} size={size} sx={sx} color={color} endIcon={endIcon}>{title}</Button>
    )
}

export default ButtonComp