import React from 'react'
import { useSelector } from 'react-redux'

import StudentsTable from './StudentsTable'
import StudentsTableHeaders from './StudentsTableHeaders'

const StudentsContainer = (props) => {
    const studentsData = useSelector((state) => {
        return state.adminStudents.data
    })

    return (
        <div>
            <StudentsTableHeaders studentsData={studentsData} />
            <StudentsTable studentsData={studentsData} /> 
        </div>
    )
}

export default StudentsContainer