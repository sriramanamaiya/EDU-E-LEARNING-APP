import React from 'react'

import { TextField } from '@mui/material'

const InputField = (props) => {
    const { label, name, value, handleChange, helperText, error, margin, size } = props

    return (
        <>
            <TextField label={label} name={name} value={value} onChange={handleChange} helperText={helperText} error={error} margin={margin} size={size} />
            <br />
        </>
    )
}

export default InputField