import React from 'react'
import { TableContainer,TableCell,Table, TableRow,TableBody, TableHead } from '@mui/material'
import { Link } from 'react-router-dom'
import PermMediaIcon from '@mui/icons-material/PermMedia'

import EditDeleteLecture from './EditDeleteLecture' 

const LecturesTable = (props) => {
    const  { lecturesData } = props

    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Title</TableCell>
                        <TableCell align="left">Asset Type</TableCell>
                        <TableCell align="left">Edit</TableCell>
                        <TableCell align="left">Delete</TableCell>
                        <TableCell align="left">View</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { lecturesData.map((lectures) => {
                        return (
                            <TableRow key={lectures._id}>
                                <TableCell align="left">{lectures.title}</TableCell>
                                <TableCell align="left">{lectures.assetType}</TableCell>
                                <EditDeleteLecture {...lectures} />
                                <TableCell align="left">
                                    <Link to={`/admin/lecture/${lectures._id}`}>
                                        <PermMediaIcon color="inherit" />
                                    </Link>
                                </TableCell>
                            </TableRow>
                        )
                    }) }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default LecturesTable