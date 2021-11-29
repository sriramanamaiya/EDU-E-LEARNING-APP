import axios from 'axios'

import { startGetStudentInfo } from './adminstudentsAction'

const baseUrl = 'https://dct-e-learning.herokuapp.com/api'

const startCreateCourse = (data, handleRedirect) => {
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
                    handleRedirect()
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

const createCourse = (data) => {
    return {
        type : 'CREATE-COURSE',
        payload : data
    }
}

const courseErrors = (data) => {
    return {
        type : 'COURSE-ERRORS',
        payload : data
    }
}

const allCourse = (data) => {
    return {
        type : 'ALL-COURSE',
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
                alert(error.message)
            })
    }
}

const deleteCourse = (id) => {
    return {
        type : 'DELETE-COURSE',
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
                alert(error.message)
            })
    }
}

const editCourse = (data) => {
    return {
        type : 'EDIT-COURSE',
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
                alert(error.message)
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
                alert(error.message)
            })
    }
}

const enrollUnrollStudents = (data) => {
    return {
        type : 'ENROLL-UNROLL-STUDENTS',
        payload : data
    }
}

export { startCreateCourse, courseErrors, startDeleteCourse, startEditCourse, startEnrollCourse, 
    startUnenrollCourse, allCourse }