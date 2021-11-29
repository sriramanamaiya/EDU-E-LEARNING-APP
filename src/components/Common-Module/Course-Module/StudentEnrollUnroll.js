import React from 'react'
import { IconButton, TableCell } from '@mui/material'
import AddTaskIcon from '@mui/icons-material/AddTask'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { useDispatch, useSelector } from 'react-redux'

import { startEnrollCourseStudent, startUnrollCourseStudent } from '../../../actions/studentAction'

const StudentEnrollUnroll = (props) => {
    const { id, students } = props
    const dispatch = useDispatch()

    const studentId = useSelector((state) => {
        return state.student.accountData._id
    })

    const checkStudentEnrolled = () => {
        return students.some((ele) => ele.student === studentId)
    }

    const handleEnroll = () => {
        dispatch(startEnrollCourseStudent(id))
    }

    const handleUnroll = () => {
        dispatch(startUnrollCourseStudent(id))
    }

    return (
        <TableCell align="center">
            { checkStudentEnrolled() ? (
                <IconButton color="inherit" onClick={handleUnroll}>
                    <DeleteOutlineIcon />
                </IconButton>
            ) : (
                <IconButton color="inherit" onClick={handleEnroll} > 
                    <AddTaskIcon/>
                </IconButton>
            )}
        </TableCell>
    )
}

export default StudentEnrollUnroll