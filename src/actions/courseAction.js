import axios from 'axios'
import Swal from 'sweetalert2'

import { startGetStudentInfo } from './adminstudentsAction'

const baseUrl = 'https://dct-e-learning.herokuapp.com/api'

const startCreateCourse = (data, handleShowClose) => {
    return (dispatch) => {
        axios.post(`${baseUrl}/courses`, data , {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                if( result.hasOwnProperty('errors') ){
                    dispatch(courseErrors(result.errors))
                }else{
                    dispatch(createCourse(result))
                    handleShowClose()
                }
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
    }
}

const createCourse = (data) => {
    return {
        type : 'CREATE_COURSE',
        payload : data
    }
}

const courseErrors = (data) => {
    return {
        type : 'COURSE_ERRORS',
        payload : data
    }
}

const allCourse = (data) => {
    return {
        type : 'ALL_COURSE',
        payload : data
    }
}

const startDeleteCourse = (id) => {
    return (dispatch) => {
        axios.delete(`${baseUrl}/courses/${id}`, {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                dispatch(deleteCourse(response.data._id))
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
    }
}

const deleteCourse = (id) => {
    return {
        type : 'DELETE_COURSE',
        payload : id
    }
}

const startEditCourse = (id,data, handleClose) => {
    return (dispatch) => {
        axios.put(`${baseUrl}/courses/${id}`, data, {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                if( result.hasOwnProperty('errors') ){
                    dispatch(courseErrors(result.errors))
                }else{
                    dispatch(editCourse(result))
                    handleClose()
                }
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
    }
}

const editCourse = (data) => {
    return {
        type : 'EDIT_COURSE',
        payload : data
    }
}

const startEnrollCourse = (courseId, studentId) => {
    return (dispatch) => {
        axios.patch(`${baseUrl}/courses/enroll?courseId=${courseId}&studentId=${studentId}`, {} ,{
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                dispatch(startGetStudentInfo(studentId))
                dispatch(enrollUnrollStudents(response.data))
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
    }
}

const startUnenrollCourse = (courseId, studentId) => {
    return (dispatch) => {
        axios.patch(`${baseUrl}/courses/unenroll?courseId=${courseId}&studentId=${studentId}`, {} ,{
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                dispatch(startGetStudentInfo(studentId))
                dispatch(enrollUnrollStudents(response.data))
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
    }
}

const enrollUnrollStudents = (data) => {
    return {
        type : 'ENROLL_UNROLL_STUDENTS',
        payload : data
    }
}

/* Student Course */
const startGetStudentEnrolledCourses = (token) => {
    return (dispatch) => {
        axios.get(`${baseUrl}/courses/enrolled`, {
            headers : {
                'Authorization' : token
            }
        })
            .then((response) => {
                dispatch(allCourse(response.data))
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
    }
}

export { startCreateCourse, courseErrors, startDeleteCourse, startEditCourse, startEnrollCourse, 
    startUnenrollCourse, allCourse, startGetStudentEnrolledCourses }