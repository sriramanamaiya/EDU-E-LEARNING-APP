import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import StudentsSortSearch from './StudentsSortSearch'
import { Box } from '@mui/system'

import StudentsTable from './StudentsTable'
import StudentsTableHeaders from './StudentsTableHeaders'
import { searchFilter, sortAlphaInAToZ, sortAlphaInZToA } from '../../helperFunctions/helperFunctions'

const StudentsContainer = (props) => {
    const [ studentsData, setStudentsData ] = useState([])

    const studData = useSelector((state) => {
        return state.adminStudents.data
    })

    useEffect(() => {
        setStudentsData(studData)
    },[studData])

    const handleSort = (value) => {
        if( value.length === 0 ){
            setStudentsData(studData)
        }else if( value === 'AToZ' ){
            setStudentsData(sortAlphaInAToZ(studData))
        }else if( value === 'ZToA' ){
            setStudentsData(sortAlphaInZToA(studData))
        }
    }

    const handleSearch = (value) => {
        setStudentsData(searchFilter(studData,value))
    }

    return (
        <>
            <StudentsTableHeaders studentsData={studentsData} />
            { studentsData.length > 0 && (
                <>
                    <Box sx={{ display : "flex", justifyContent : "space-between" }}>
                        <StudentsSortSearch 
                            studentsData={studentsData} 
                            handleSort={handleSort} 
                            handleSearch={handleSearch} 
                        />
                    </Box>
                    <StudentsTable studentsData={studentsData} /> 
                </>
            ) }
        </>
    )
}

export default StudentsContainer