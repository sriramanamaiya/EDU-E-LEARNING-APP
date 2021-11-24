import React from 'react'
import { TextField, Box } from '@mui/material'

const InputField = (props) => {
    const { label, name, type, value, handleChange, handleBlur, helperText, error, margin, size, required } = props

    return (
        <>  
            <Box>
                <TextField 
                    label={label} 
                    name={name} 
                    type={type} 
                    value={value} 
                    onChange={handleChange} 
                    onBlur={handleBlur} 
                    helperText={helperText} 
                    error={error} 
                    margin={margin} 
                    size={size}
                    sx={{width : '100%'}} 
                    required={required}
                />
            </Box>
        </>
    )
}

export default InputField