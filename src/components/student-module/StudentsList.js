import React from 'react'
import { TableBody,TableCell, TableRow } from '@mui/material'
import { TableContainer, Table , TableHead } from '@mui/material'

import EachStudent from './EachStudent'
import ButtonComp from '../common-comp/ButtonComp'

const StudentsList = (props) => {
    const { studentsData } = props

    return (
        <>
        <TableContainer sx={{mt: 4}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Allowed</TableCell>
                            <TableCell align="center">Delete</TableCell>
                            <TableCell align="center">Edit</TableCell>
                            <TableCell  align="center">Details</TableCell>
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
                                            <EachStudent id={student._id} name={student.name} email={student.email} allowed={student.isAllowed} />
                                            <TableCell  align="center"><ButtonComp variant="outlined" title="View Details" size="small" /></TableCell>
                                        </TableRow>
                                    )
                                }) }
                            </>
                        ) }
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default StudentsList