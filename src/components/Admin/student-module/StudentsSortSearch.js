import React, { useState } from 'react'
import { TextField, MenuItem } from '@mui/material'

const StudentsSortSearch = (props) => {
    const { handleSort, handleSearch } = props
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
        <>
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
                <MenuItem value="">Sort</MenuItem>
                <MenuItem value="AToZ">Sort A to Z</MenuItem>
                <MenuItem value="ZToA">Sort Z to A</MenuItem>
            </TextField>
        </>
    )
}

export default StudentsSortSearch