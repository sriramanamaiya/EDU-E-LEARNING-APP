import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { searchFilter, sortAllowed, sortAlphaInAToZ, sortAlphaInZToA, sortUnAllowed } from '../../helperFunctions/helperFunctions'

import SortSearch from './SortSearch'
import StudentsRegisterAndEdit from './StudentsRegisterAndEdit'
import StudentsTable from './StudentsTable'
import TableHeaders from './TableHeaders'

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
        }else if( value === "AToZ" ){
            setStudentsData(sortAlphaInAToZ(studData))
        }else if( value === "ZToA" ){
            setStudentsData(sortAlphaInZToA(studData))
        }else if( value === "unallowed" ){
            setStudentsData(sortUnAllowed(studData))
        }else if( value === "allowed" ){
            setStudentsData(sortAllowed(studData))
        }
    }

    const handleSearch = (value) => {
        setStudentsData(searchFilter(studData,value))
    }

    const selectItems = [ 
        { name : 'Sort', value : '' } , 
        { name : 'Sort A to Z', value : 'AToZ' } ,
        { name : 'Sort Z to A', value : 'ZToA' },
        { name : 'Sort By Unallowed', value : 'unallowed' },
        { name : 'Sort By Allowed', value : 'allowed' } 
    ]

    return (
        <>
            <TableHeaders 
                noDataTitle="No Students found add Student "
                buttonTitle="Add Student"
                registerTitle="Register a New Student"
                headingTitle={`Registered Students 🧑‍🎓 - (${studentsData.length})`}
                data={studentsData} 
                component={StudentsRegisterAndEdit}
            />
            { studentsData.length > 0 && (
                <>
                    <SortSearch 
                        selectItems={selectItems}
                        handleSort={handleSort} 
                        handleSearch={handleSearch} 
                    />
                    <StudentsTable studentsData={studentsData} /> 
                </>
            ) }
        </>
    )
}

export default StudentsContainer