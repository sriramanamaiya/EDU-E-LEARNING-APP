import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List } from '@mui/material'

import { startGetAllStudents } from '../../actions/studentsAction'

import StudentsList from './StudentsList'

const StudentsRegistered = (props) => {
    const dispatch = useDispatch()

    const studentsData = useSelector((state) => {
        return state.students.data
    })

    useEffect(() => {
        dispatch(startGetAllStudents(localStorage.getItem('token')))
    },[])

    return (
        <div>
            <List>
                { studentsData.length > 0 && (
                    <>
                        { studentsData.map((student) => {
                            return (
                                <StudentsList 
                                    key={student._id} 
                                    id={student._id} 
                                    name={student.name} 
                                    email={student.email} 
                                    allowed={student.isAllowed} 
                                />
                            )
                        }) }
                    </>
                ) }
            </List>
        </div>
    )
}

export default StudentsRegistered