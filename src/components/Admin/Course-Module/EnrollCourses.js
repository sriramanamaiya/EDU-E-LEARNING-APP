import React from 'react'
import { useSelector, dispatch, useDispatch } from 'react-redux'
import { List,ListItem, ListItemText } from '@mui/material'

import { startEnrollCourse, startUnenrollCourse } from '../../../actions/courseAction'

import ButtonComp from '../../Reusable-Comp/ButtonComp'

const EnrollCourses = (props) => {
    const { courseId } = props
    console.log(courseId)

    const dispatch = useDispatch()

    const studentsData = useSelector((state) => {
        return state.adminStudents.data
    })

    const handleEnroll = (id) => {
        dispatch(startEnrollCourse(courseId,id))
    }
    
    const handleUnenroll = (id) => {
        dispatch(startUnenrollCourse(courseId,id))
    }

    return (
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
                                title="Add" 
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
                                        title="Add" 
                                    />
                                ) }
                            </>
                        )}
                    </ListItem>
                )
            }) }
        </List>
    )
}

export default EnrollCourses