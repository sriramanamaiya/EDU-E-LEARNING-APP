import React from 'react'
import { Alert } from '@mui/material'

const AlertComp = (props) => {
    const { type, title } = props

    return (
        <Alert severity={type}>{title}</Alert>
    )
}

export default AlertComp