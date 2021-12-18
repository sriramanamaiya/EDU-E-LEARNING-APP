import React from 'react'
import { TableBody, TableCell, TableRow } from '@mui/material'
import { TableContainer, Table , TableHead } from '@mui/material'

import EditAndDeleteStudents from './EditAndDeleteStudents'
import ShowDetailsModal from './ShowDetailsModal'
import SearchNotFound from '../../Reusable-Comp/SearchNotFound'

const StudentsTable = (props) => {
    const { studentsData } = props

    return (
        <>
            { studentsData.length > 0 ? (
                <TableContainer sx={{mt: 4}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Email</TableCell>
                                <TableCell align="center">Allowed</TableCell>
                                <TableCell align="center">Delete</TableCell>
                                <TableCell align="center">Edit</TableCell>
                                <TableCell align="center">Details</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { studentsData.length > 0 && (
                                <>
                                    { studentsData.map((student) => {
                                        return (
                                            <TableRow key={student._id}>
                                                <TableCell align="center">{student.name}</TableCell>
                                                <TableCell align="center">{student.email}</TableCell>
                                                <TableCell align="center">{student.isAllowed.toString()}</TableCell>
                                                <EditAndDeleteStudents 
                                                    id={student._id} 
                                                    name={student.name} 
                                                    email={student.email} 
                                                    allowed={student.isAllowed} 
                                                />
                                                <TableCell align="center"><ShowDetailsModal {...student} /></TableCell>
                                            </TableRow>
                                        )
                                    }) }
                                </>
                            ) }
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <SearchNotFound />
            )}
        </>
    )
}

export default StudentsTable