import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { List,ListItem, ListItemText, Typography} from '@mui/material'

import { startEnrollCourse, startUnenrollCourse } from '../../../actions/courseAction'
import { searchFilter } from '../../helperFunctions/helperFunctions'

import ButtonComp from '../../Reusable-Comp/ButtonComp'
import SortSearch from '../../Common-Comp/SortSearch'
import SearchNotFound from '../../Reusable-Comp/SearchNotFound'

const EnrollCourses = (props) => {
    const { courseId } = props
    const [ studentsData, setStudentsData ] = useState([])

    const dispatch = useDispatch()

    const studData = useSelector((state) => {
        return state.adminStudents.data
    })

    useEffect(() => {
        setStudentsData(studData)
    },[studData])

    const handleEnroll = (id) => {
        dispatch(startEnrollCourse(courseId,id))
    }
    
    const handleUnenroll = (id) => {
        dispatch(startUnenrollCourse(courseId,id))
    }

    const handleSort = (value) => {
        if( value.length === 0 ){
            setStudentsData(studData)
        }else if( value === 'unenroll'  ){
            const result = []
            studentsData.forEach((student) => {
                if( student.courses.some((ele) => ele.course === courseId )){
                    result.unshift(student)
                }else{
                    result.push(student)
                }
            })
            setStudentsData(result)
        }else if( value === 'enroll' ){
            const result = []
            studentsData.forEach((student) => {
                if( student.courses.some((ele) => ele.course === courseId )){
                    result.push(student)
                }else{
                    result.unshift(student)
                }
            })
            setStudentsData(result)
        }
    }

    const handleSearch = (value) => {
        setStudentsData(searchFilter(studData,value))
    }

    const selectItems = [ 
        { name : 'Sort', value : '' }, 
        { name : 'Sort By Unenroll', value : 'unenroll' },
        { name : 'Sort By Enroll', value : 'enroll' } 
    ]

    return (
        <>
            <Typography variant="h6">Add Students to Your Course: </Typography>
            <SortSearch selectItems={selectItems} handleSearch={handleSearch} handleSort={handleSort} />
            { studentsData.length > 0 ? (
                <List>
                    { studentsData.map((students) => {
                        return (
                            <ListItem key={students._id}>
                                <ListItemText primary={students.name} />
                                { students.courses.length === 0 ? (
                                    <ButtonComp 
                                        variant="outlined" 
                                        handleClick={() => handleEnroll(students._id)} 
                                        color="primary" 
                                        title="Enroll" 
                                    />
                                ) : (
                                    <>
                                        { students.courses.some((ele) => ele.course === courseId ) ? (
                                            <ButtonComp 
                                                variant="outlined" 
                                                handleClick={() => handleUnenroll(students._id)} 
                                                color="primary" 
                                                title="Unenroll" 
                                            />
                                        ) : (
                                            <ButtonComp 
                                                variant="outlined" 
                                                handleClick={() => handleEnroll(students._id)} 
                                                color="primary" 
                                                title="Enroll" 
                                            />
                                        ) }
                                    </>
                                )}
                            </ListItem>
                        )
                    }) }
                </List>
            ) : (
                <SearchNotFound />
            )}
        </>
    )
}

export default EnrollCourses