import React from 'react'
import { MenuItem } from '@mui/material'

const SelectTagItem = (props) => {
    const { value, title } = props

    return (
        <MenuItem value={value}>{title}</MenuItem>
    )
}

export default SelectTagItem