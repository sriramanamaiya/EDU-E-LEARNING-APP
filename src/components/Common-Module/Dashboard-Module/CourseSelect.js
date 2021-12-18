import React from 'react'
import { TextField, MenuItem } from '@mui/material'

const CourseSelect = (props) => {
    const { courses, select, handleSelect } = props

    return (
        <TextField 
            sx={{width : '30%', mb : 3}} 
            margin="normal"  
            name="sort" 
            size="small" 
            label="Select Course"
            select 
            value={select}
            onChange={handleSelect}
            >
                { courses.map((course,i) => {
                    return (
                        <MenuItem key={i} value={course._id}>{course.name}</MenuItem>
                    )
                }) }
        </TextField>
    )
}

export default CourseSelect