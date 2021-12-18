import axios from 'axios'
import jwt_decode from 'jwt-decode'
import Swal from 'sweetalert2'

import { allCourse, enrollUnrollStudents } from './courseAction'

const baseUrl = 'https://dct-e-learning.herokuapp.com/api'

const startLoginStudent = (data,redirect) => {
    return (dispatch) => {
        axios.post(`${baseUrl}/students/login`, data )
            .then((response) => {
                const result = response.data
                if(result.hasOwnProperty('errors')){
                    dispatch(studentErrors(result))
                }else{
                    localStorage.setItem('token', result.token)
                    const res = jwt_decode(result.token)
                    localStorage.setItem('role', res.role)
                    Swal.fire({
                        icon: 'success',
                        title: 'SucessFully Logged In',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    dispatch(studentIsLoggedIn())
                    dispatch(startGetStudentAccountCoursesEnrolledCourses(res._id,result.token))
                    redirect()
                }
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
    }
}

const studentErrors = (err) => {
    return {
        type : 'STUDENT_ERRORS',
        payload : err
    }
}

const studentIsLoggedIn = () => {
    return {
        type : 'STUDENT_LOGGED_IN'
    }
}

const startGetStudentAccountCoursesEnrolledCourses = (id,token) => {
    const url1 = axios.get(`${baseUrl}/students/${id}`, {
        headers : {
            'Authorization' : token
        }
    }),
    url2 = axios.get(`${baseUrl}/courses`, {
        headers : {
            'Authorization' : token
        }
    }),
    url3 = axios.get(`${baseUrl}/courses/enrolled`, {
        headers : {
            'Authorization' : token
        }
    })

    return (dispatch) => {
        dispatch(studentLoading())
        Promise.all([ url1,url2,url3 ])
            .then((response) => {
                const [ accountInfo, allCourses, enrolledCourses ] = response
                dispatch(studentLoading())
                dispatch(studentAccountInfo(accountInfo.data))
                dispatch(allCourse(allCourses.data))
                dispatch(allCourseStudent(enrolledCourses.data))
                console.log(enrolledCourses.data)
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
    }
}

const studentAccountInfo = (data) => {
    return {
        type : 'STUDENT_ACCOUNT_INFO',
        payload : data
    }
}

const allCourseStudent = (data) => {
    return {
        type : 'ALL_COURSE_STUDENT',
        payload : data
    }
}

const startEnrollCourseStudent = (courseId) => {
    return (dispatch) => {
        axios.patch(`${baseUrl}/courses/enroll?courseId=${courseId}`, {}, {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                if( typeof result === 'string' ){
                    Swal.fire(result)
                }else{
                    console.log(result)
                    dispatch(enrollUnrollStudents(result))
                    dispatch(addEnrollCourse(result))
                }
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
    }
}

const addEnrollCourse = (data) => {
    return {
        type : 'ADD_ENROLL_COURSE',
        payload : data
    }
}

const startUnrollCourseStudent = (courseId) => {
    return (dispatch) => {
        axios.patch(`${baseUrl}/courses/unenroll?courseId=${courseId}`, {} ,{
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                if( typeof result === 'string' ){
                    Swal.fire(result)
                }else{
                    dispatch(enrollUnrollStudents(result))
                    dispatch(removeUnenrollCourse(result))
                }
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
        }
}

const removeUnenrollCourse = (data) => {
    return {
        type : 'REMOVE_UNENROLL_COURSE',
        payload : data
    }
}

const studentLoading = () => {
    return {
        type : 'STUDENT_LOADING'
    }
}

const studentLogOut = () => {
    return {
        type : 'STUDENT_LOGOUT'
    }
}

export { startLoginStudent, studentErrors, studentIsLoggedIn, startEnrollCourseStudent,
    startUnrollCourseStudent, studentAccountInfo, studentLogOut, startGetStudentAccountCoursesEnrolledCourses }