import React from 'react'
import { Box } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

import { startLectureComplete } from '../../actions/lectureAction'

import ButtonComp from '../Reusable-Comp/ButtonComp'

const LectureComplete = (props) => {
    const { students, lectureId } = props

    const dispatch = useDispatch()

    const studentId = useSelector((state) => {
        return state.student.accountData._id
    })

    const findStudent = students.find((stud) => {
        return stud.student === studentId
    })

    const handleClick = () => {
        dispatch(startLectureComplete(lectureId,studentId))
    }

    return (
        <Box>
            <ButtonComp 
                variant="contained" 
                color="primary" 
                handleClick={handleClick} 
                title="Complete" 
                disabled={ findStudent ? findStudent.isCompleted : false}  
            />
        </Box>
    )
}

export default  LectureComplete