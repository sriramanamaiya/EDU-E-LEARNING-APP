import React from 'react'
import { TableContainer,TableCell,Table, TableRow,TableBody, TableHead } from '@mui/material'
import { IconButton,Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'

import Heading from '../../Reusable-Comp/Heading'
import EditDeleteCourse from './EditDeleteCourse'

const CourseTable = (props) => {
    const { courseData } = props

    return (
        <>
            <Box sx={{ display: 'flex', alignItems : 'center', justifyContent: 'space-between'}}>
                    <Heading type="h4" title={`Courses 📑 - (${courseData.length})`} />
                    <Typography variant="body1" >
                        <Link to="/admin/course/create">
                            Add a New Course 
                                <IconButton > 
                                    <AddIcon /> 
                                </IconButton>
                            </Link>
                    </Typography>
            </Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Course Name</TableCell>
                            <TableCell align="center">Duration</TableCell>
                            <TableCell align="center">Category</TableCell>
                            <TableCell align="center">Edit</TableCell>
                            <TableCell align="center">Delete</TableCell>
                            <TableCell align="center">More Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            { courseData.map((course) => {
                                return (
                                    <TableRow key={course._id}>
                                        <TableCell align="center">{course.name}</TableCell>
                                        <TableCell align="center">{course.duration}</TableCell>
                                        <TableCell align="center">{course.category}</TableCell>
                                        <EditDeleteCourse {...course} />
                                    </TableRow>
                                )
                            }) }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default CourseTable