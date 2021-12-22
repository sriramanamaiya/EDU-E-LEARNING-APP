import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { searchFilter, sortAlphaInAToZ, sortAlphaInZToA } from '../../helperFunctions/helperFunctions'

import SortSearch from '../../Common-Comp/SortSearch'
import TableHeaders from '../../Common-Comp/TableHeaders'
import CourseRegisterEdit from './CourseRegisterEdit'
import CourseTable from './CourseTable'

const CourseContainer = (props) => {
    const [ courseData, setCourseData ] = useState([])

    const data = useSelector((state) => {
        return [ state.courses.data, state.admin.data.role ]
    })

    const [ adminStudentCoursesData, userRole ] = data

    useEffect(() => {
        setCourseData(adminStudentCoursesData)
    },[adminStudentCoursesData])

    const handleSort = (value) => {
        if( value.length === 0 ){
            setCourseData(adminStudentCoursesData)
        }else if( value === "AToZ" ){
            setCourseData(sortAlphaInAToZ(adminStudentCoursesData))
        }else if( value === "ZToA" ){
            setCourseData(sortAlphaInZToA(adminStudentCoursesData))
        }
    }

    const handleSearch = (value) => {
        setCourseData(searchFilter(adminStudentCoursesData,value))
    }

    const selectItems = [ 
        { name : 'Sort', value : '' }, 
        { name : 'Sort A to Z', value : 'AToZ' },
        { name : 'Sort Z to A', value : 'ZToA' } 
    ]

    return (
        <>
            <TableHeaders 
                noDataTitle="No Course Added 📔"
                buttonTitle="Add Course"
                registerTitle="Add a New Course"
                headingTitle={`Courses 📑 - (${courseData.length})`}
                data={adminStudentCoursesData} 
                component={CourseRegisterEdit}
                userRole={userRole}
            />
            { adminStudentCoursesData.length > 0   && (
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