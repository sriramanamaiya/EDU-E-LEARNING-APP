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
                    dispatch(studentServerMessages(result.errors))
                }else{
                    console.log(result)
                    if( result.hasOwnProperty('errors') ){
                        dispatch(studentServerMessages(result))
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

const studentServerMessages = (data) => {
    return {
        type : 'STUDENT-SERVER-MESSAGE',
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
                console.log(response.data)
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
    console.log(id,data,handleClose)
    return (dispatch) => {
        axios.put(`${baseUrl}/students/${id}`, data, {
            headers : {
                "Authorization" : localStorage.getItem('token')
            }
        })
            .then((response) => {
                console.log(response.data)
                const result = response.data
                if( result.hasOwnProperty('message') ){
                    dispatch(studentServerMessages(result.errors))
                }else{
                    if( result.hasOwnProperty('errors') ){
                        dispatch(studentServerMessages(result))
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

export { startStudentRegister, studentServerMessages, startGetAllStudents, startEditStudent, startDeleteStudent }