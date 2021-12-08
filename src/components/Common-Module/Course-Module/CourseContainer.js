import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import SortSearch from '../../Admin/Student-Module/SortSearch'
import TableHeaders from '../../Admin/Student-Module/TableHeaders'
import { searchFilter, sortAlphaInAToZ, sortAlphaInZToA } from '../../helperFunctions/helperFunctions'
import CourseRegisterEdit from './CourseRegisterEdit'

import CourseTable from './CourseTable'

const CourseContainer = (props) => {
    const [ userRole, setUserRole ] = useState('')
    const [ courseData, setCourseData ] = useState([])

    const data = useSelector((state) => {
        return [state.courses.data, state.student.data]
    })

    const [ adminCourData, studCourData ] = data

    useEffect(() => {
        const role = localStorage.getItem('role')
        setUserRole(role)
    },[])

    useEffect(() => {
        const userRole = localStorage.getItem('role')
        if( userRole === 'admin' ){
            setCourseData(adminCourData)
        }else{
            setCourseData(studCourData)
        }
    },[adminCourData,studCourData])


    const handleSort = (value) => {
        let unSortedCourseData
        if( userRole === 'admin' ){
            unSortedCourseData = adminCourData
        }else{
            unSortedCourseData = studCourData
        }
        if( value.length === 0 ){
            setCourseData(unSortedCourseData)
        }else if( value === "AToZ" ){
            setCourseData(sortAlphaInAToZ(unSortedCourseData))
        }else if( value === "ZToA" ){
            setCourseData(sortAlphaInZToA(unSortedCourseData))
        }else if( value === "category" ){
            // setCourseData(sortUnAllowed(courseData))
        }
    }

    const handleSearch = (value) => {
        let unSortedCourseData
        if( userRole === 'admin' ){
            unSortedCourseData = adminCourData
        }else{
            unSortedCourseData = studCourData
        }
        setCourseData(searchFilter(unSortedCourseData,value))
    }

    const selectItems = [ 
        { name : 'Sort', value : '' }, 
        { name : 'Sort A to Z', value : 'AToZ' },
        { name : 'Sort Z to A', value : 'ZToA' } 
    ]

    return (
        <>
            <TableHeaders 
                noDataTitle="No Course found "
                buttonTitle="Add Course"
                registerTitle="Add a New Course"
                headingTitle={`Courses 📑 - (${courseData.length})`}
                data={ userRole === 'admin' ? adminCourData : studCourData} 
                component={CourseRegisterEdit}
                userRole={userRole}
            />
            { studCourData.length > 0 || adminCourData.length > 0  && (
                <>
                    <SortSearch 
                        selectItems={selectItems} 
                        handleSort={handleSort}
                        handleSearch={handleSearch}
                    />
                    <CourseTable userRole={userRole} courseData={courseData} />
                </>
            ) }
        </>
    )
}

export default CourseContainer