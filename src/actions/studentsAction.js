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

export { startStudentRegister, studentServerMessages }