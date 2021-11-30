import React from 'react'
import { TableContainer,TableCell,Table, TableRow,TableBody, TableHead } from '@mui/material'

import EditDeleteLecture from './EditDeleteLecture' 

const LecturesTable = (props) => {
    const  { lecturesData } = props

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Asset Type</TableCell>
                        <TableCell>Asset URL</TableCell>
                        <TableCell>Edit</TableCell>
                        <TableCell>Delete</TableCell>
                        <TableCell>View</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { lecturesData.map((lectures) => {
                        return (
                            <TableRow key={lectures._id}>
                                <TableCell>{lectures.title}</TableCell>
                                <TableCell>{lectures.assetType}</TableCell>
                                <TableCell>{lectures.assetURL}</TableCell>
                                <EditDeleteLecture {...lectures} />
                            </TableRow>
                        )
                    }) }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default LecturesTable