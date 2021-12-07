import axios from 'axios'
import jwt_decode from 'jwt-decode'
import Swal from 'sweetalert2'

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
                    console.log(res)
                    dispatch(startGetStudentAccountInfo(res._id,result.token))
                    Swal.fire({
                        icon: 'success',
                        title: 'SucessFully Logged In',
                        showConfirmButton: false,
                        timer: 2000
                    })
                    dispatch(studentIsLoggedIn())
                    dispatch(startGetAllCoursesStudent(result.token))
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
        type : 'STUDENT-ERRORS',
        payload : err
    }
}

const studentIsLoggedIn = () => {
    return {
        type : 'STUDENT-LOGGED_IN'
    }
}

const startGetStudentAccountInfo = (id,token) => {
    return (dispatch) => {
        axios.get(`${baseUrl}/students/${id}`, {
            headers : {
                'Authorization' : token
            }
        })
            .then((response) => {
                dispatch(studentAccountInfo(response.data))
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
    }
}

const studentAccountInfo = (data) => {
    return {
        type : 'STUDENT-ACCOUNT-INFO',
        payload : data
    }
}

const startGetAllCoursesStudent = (token) => {
    return (dispatch) => {
        dispatch(studentLoading())
        axios.get(`${baseUrl}/courses`, {
            headers : {
                'Authorization' : token
            }
        })
            .then((response) => {
                const result = response.data
                dispatch(studentLoading())
                dispatch(allCourseStudent(result))
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
    }
}

const allCourseStudent = (data) => {
    return {
        type : 'ALL-COURSE-STUDENT',
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
                    dispatch(enrollUnrollStudentCourse(result))
                }
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
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
                    dispatch(enrollUnrollStudentCourse(result))
                }
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
        }
}

const enrollUnrollStudentCourse = (data) => {
    return {
        type : 'ENROLL-UNROLL-STUDENT-COURSE',
        payload : data
    }
}

const studentLoading = () => {
    return {
        type : 'STUDENT-LOADING'
    }
}

const studentLogOut = () => {
    return {
        type : 'STUDENT-LOGOUT'
    }
}

export { startLoginStudent, studentErrors, studentIsLoggedIn, startGetAllCoursesStudent, startEnrollCourseStudent,
    startUnrollCourseStudent, studentAccountInfo, studentLogOut }