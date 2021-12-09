import React, { useState } from 'react'
import { TextField, MenuItem, Box } from '@mui/material'

const SortSearch = (props) => {
    const { handleSort, handleSearch, selectItems } = props
    const [ search, setSearch ] = useState('')
    const [ select, setSelect ]= useState('')

    const handleSelect = (e) => {
        setSelect(e.target.value)
        handleSort(e.target.value)
    }

    const handleChange = (e) => {
        setSearch(e.target.value)
        handleSearch(e.target.value)
    }

    return (
        <Box sx={{ display : "flex", justifyContent : "space-between" }}>
            <TextField
                label="Search by Name" 
                name="search" 
                value={search} 
                onChange={handleChange} 
                margin="normal" 
                size="small" 
                sx={{ width : "50%" }}
            />
            
            <TextField 
                sx={{width : '30%'}} 
                margin="normal"  
                name="sort" 
                size="small" 
                label="Sort By"
                select 
                value={select}
                onChange={handleSelect}
            >
                { selectItems.map((item,i) => {
                    return (
                        <MenuItem key={i} value={item.value}>{item.name}</MenuItem>
                    )
                }) }
            </TextField>
        </Box>
    )
}

export default SortSearch