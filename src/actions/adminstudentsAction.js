import axios from 'axios'

const baseUrl = 'https://dct-e-learning.herokuapp.com/api'

const startStudentRegister = (data, redirect) => {
    return (dispatch) => {
        axios.post(`${baseUrl}/admin/students`, data , {
            headers : {
                "Authorization" : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                if( result.hasOwnProperty('message') ){
                    dispatch(studentsAuthErrors(result.errors))
                }else{
                    if( result.hasOwnProperty('errors') ){
                        dispatch(studentsAuthErrors(result))
                    }else{
                        dispatch(registeredStudents(result))
                        redirect()
                    }
                }
            })
            .catch((err) => {
                alert(err.message)
            })
    }
}

const studentsAuthErrors = (data) => {
    return {
        type : 'STUDENT-AUTH-ERRORS',
        payload : data
    }
}

const registeredStudents = (data) => {
    return {
        type : 'REGISTERED-STUDENT',
        payload : data
    }
}

const startGetAllStudents = (token) => {
    return (dispatch) => {
        axios.get(`${baseUrl}/admin/students`,{
            headers : {
                "Authorization" : token
            }
        })
            .then((response) => {
                dispatch(allStudents(response.data))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

const allStudents = (data) => {
    return {
        type : 'ALL-STUDENTS',
        payload : data
    }
}

const startEditStudent = (id,data, handleClose) => {
    return (dispatch) => {
        axios.put(`${baseUrl}/students/${id}`, data, {
            headers : {
                "Authorization" : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                if( result.hasOwnProperty('message') ){
                    dispatch(studentsAuthErrors(result.errors))
                }else{
                    if( result.hasOwnProperty('errors') ){
                        dispatch(studentsAuthErrors(result))
                    }else{
                        dispatch(editedStudentDetails(result))
                        handleClose()
                    }
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

const editedStudentDetails = (data) => {
    return {
        type : 'EDITED-STUDENT-DETAILS',
        payload : data
    }
}

const startDeleteStudent = (id)  => {
    return (dispatch) => {
        axios.delete(`${baseUrl}/admin/students/${id}`, {
            headers : {
                "Authorization" : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                dispatch(deleteStudent(result))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

const deleteStudent = (data) => {
    return {
        type : 'DELETE-STUDENT',
        payload : data
    }
}

const startGetStudentInfo = (id) => {
    return (dispatch) => {
        axios.get(`${baseUrl}/students/${id}`, {
            headers : {
                "Authorization" : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                dispatch(editedStudentDetails(result))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    
}

// const studentInfo = (data) => {
//     return {
//         type : 'STUDENT-INFO',
//         payload : data
//     }
// }

export { startStudentRegister, studentsAuthErrors, startGetAllStudents, startEditStudent, startDeleteStudent, startGetStudentInfo }