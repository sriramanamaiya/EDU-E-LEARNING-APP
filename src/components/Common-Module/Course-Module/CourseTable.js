import React from 'react'
import { TableContainer,TableCell,Table, TableRow,TableBody, TableHead } from '@mui/material'
import { Link } from 'react-router-dom'
import AddBoxIcon from '@mui/icons-material/AddBox'

import EditDeleteCourse from './EditDeleteCourse'
import EnrollUnrollContainer from './EnrollUnrollContainer'
import StudentEnrollUnroll from './StudentEnrollUnroll'
import ViewCourseDetails from './ViewCourseDetails'
import SearchNotFound from '../../Reusable-Comp/SearchNotFound'

const CourseTable = (props) => {
    const { courseData, userRole } = props

    return (
        <>
            { courseData.length > 0 ? (
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Course Name</TableCell>
                                <TableCell align="center">Category</TableCell>
                                <TableCell align="center">Author</TableCell>
                                <TableCell align="center">Duration</TableCell>
                                { userRole && (
                                    <>
                                    <TableCell align="center">Edit</TableCell>
                                    <TableCell align="center">Delete</TableCell>
                                    <TableCell>Add/Update/View Lectures</TableCell>
                                    </>  
                                ) }
                                <TableCell align="center">{ userRole ? (
                                    'Enroll/Unenroll Students'
                                ) : (
                                    'Enroll/Unenroll Course'
                                )}</TableCell>
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
                                            { userRole && <EditDeleteCourse {...course} /> }
                                            { userRole ? (
                                                <>
                                                    <TableCell align="center">
                                                        <Link to={`/admin/courses/${course._id}`} >
                                                            <AddBoxIcon color="primary" />
                                                        </Link>
                                                    </TableCell>
                                                    <EnrollUnrollContainer id={course._id} />
                                                </>
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
            )  : (
                <SearchNotFound />
            )}
        </>
        
    )
}

export default CourseTable