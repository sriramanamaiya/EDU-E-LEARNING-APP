import React from 'react'

import { TextField } from '@mui/material'

const InputField = (props) => {
    const { label, name, type, value, handleChange, handleBlur, helperText, error, margin, size } = props

    return (
        <>
            <TextField label={label} name={name} type={type} value={value} onChange={handleChange} onBlur={handleBlur} helperText={helperText} error={error} margin={margin} size={size} />
            <br />
        </>
    )
}

export default InputField