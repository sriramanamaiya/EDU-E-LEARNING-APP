import React from 'react'
import { TableContainer,TableCell,Table, TableRow,TableBody, TableHead } from '@mui/material'
import { IconButton,Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'

import Heading from '../../Reusable-Comp/Heading'
import EditDeleteCourse from './EditDeleteCourse'
import EnrollUnrollContainer from './EnrollUnrollContainer'
import StudentEnrollUnroll from './StudentEnrollUnroll'
import ViewCourseDetails from './ViewCourseDetails'

const CourseTable = (props) => {
    const { courseData, userRole } = props

    return (
        <>
            <Box sx={{ display: 'flex', alignItems : 'center', justifyContent: 'space-between'}}>
                    <Heading type="h4" title={`Courses 📑 - (${courseData.length})`} />
                    { userRole === 'admin'&& (
                        <Typography variant="body1" >
                            <Link to="/admin/courses/new">
                                Add a New Course 
                                    <IconButton color="inherit"> 
                                        <AddIcon /> 
                                    </IconButton>
                                </Link>
                        </Typography>
                    )}
            </Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Course Name</TableCell>
                            <TableCell align="center">Category</TableCell>
                            <TableCell align="center">Author</TableCell>
                            <TableCell align="center">Duration</TableCell>
                            { userRole === 'admin' && (
                              <>
                                <TableCell align="center">Edit</TableCell>
                                <TableCell align="center">Delete</TableCell>
                              </>  
                            ) }
                            <TableCell align="center">{ userRole === 'admin' ? 'Enroll/Unenroll Students' : 'Enroll/Unenroll Course'}</TableCell>
                            <TableCell align="center">More Details</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                            { courseData.map((course) => {
                                return (
                                    <TableRow key={course._id}>
                                        <TableCell align="center">{course.name}</TableCell>
                                        <TableCell align="center">{course.category}</TableCell>
                                        <TableCell align="center">{course.author}</TableCell>
                                        <TableCell align="center">{course.duration}hr</TableCell>
                                        { userRole === 'admin' && <EditDeleteCourse {...course} /> }
                                        { userRole === 'admin' ? (
                                            <EnrollUnrollContainer id={course._id} />
                                        ) : (
                                            <StudentEnrollUnroll id={course._id} students={course.students} />
                                        )}
                                        <TableCell align="center"><ViewCourseDetails course={course} /></TableCell>
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