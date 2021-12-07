import React, { useState } from 'react'
import { TextField, MenuItem } from '@mui/material'

const Search = (props) => {
    const { sort, handleSort, title } = props

    return (
        <TextField 
            sx={{width : '30%'}} 
            margin="normal"  
            name="course" 
            size="small" 
            label="Sort By"
            select 
            value={sort}
            onChange={handleSort}
            >
            <MenuItem  value={sort}>{title}</MenuItem>
        </TextField>
    
    )
}

export default Search