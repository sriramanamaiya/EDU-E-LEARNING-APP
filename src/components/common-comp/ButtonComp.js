import React from 'react'

import { Button } from '@mui/material'

const ButtonComp = (props) => {
    const { variant, handleClick, title } = props

    return (
        <Button variant={variant} onClick={handleClick} >{title}</Button>
    )
}

export default ButtonComp