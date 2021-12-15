import React from 'react'
import { Button } from '@mui/material'

const ButtonComp = (props) => {
    const { variant, handleClick, title, size, color, sx, endIcon, disabled } = props

    return (
        <Button 
            variant={variant} 
            onClick={handleClick} 
            size={size} 
            sx={sx} 
            color={color} 
            endIcon={endIcon}
            disabled={disabled}
        >{title}</Button>
    )
}

export default ButtonComp