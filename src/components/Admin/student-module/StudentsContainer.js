import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { startGetAllStudents } from '../../../actions/studentsAction'

import StudentsTable from './StudentsTable'
import StudentsTableHeaders from './StudentsTableHeaders'

const StudentsContainer = (props) => {
    const dispatch = useDispatch()

    const data = useSelector((state) => {
        return [state.students.data, state.admin.isLoading]
    })

    const [ studentsData, isLoading ] = data

    useEffect(() => {
        dispatch(startGetAllStudents(localStorage.getItem('token')))
    },[])

    return (
        <div>
            { !isLoading && (
                <>
                    <StudentsTableHeaders studentsData={studentsData} />
                    <StudentsTable studentsData={studentsData} /> 
                </>
            ) }
        </div>
    )
}

export default StudentsContainer