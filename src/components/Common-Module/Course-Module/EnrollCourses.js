import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { List,ListItem, ListItemText, Typography} from '@mui/material'

import { startEnrollCourse, startUnenrollCourse } from '../../../actions/courseAction'

import ButtonComp from '../../Reusable-Comp/ButtonComp'

const EnrollCourses = (props) => {
    const { courseId } = props

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
        <>
            <Typography variant="h6">Add Students to Your Course: </Typography>
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
        </>
    )
}

export default EnrollCourses