import React from 'react'
import { useSelector } from 'react-redux'

import StudentsTable from './StudentsTable'
import StudentsTableHeaders from './StudentsTableHeaders'

const StudentsContainer = (props) => {
    const data = useSelector((state) => {
        return [state.adminStudents.data, state.admin.isLoading]
    })

    const [ studentsData, isLoading ] = data

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