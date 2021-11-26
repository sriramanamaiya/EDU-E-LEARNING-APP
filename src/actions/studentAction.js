import axios from 'axios'
import jwt_decode from 'jwt-decode'

const baseUrl = 'https://dct-e-learning.herokuapp.com/api'

const startLoginStudent = (data) => {
    return (dispatch) => {
        axios.post(`${baseUrl}/students/login`, data )
            .then((response) => {
                const result = response.data
                if(result.hasOwnProperty('errors')){
                    dispatch(studentErrors(result))
                }else{
                    console.log(result)
                    localStorage.setItem('token', result.token)
                    const res = jwt_decode(result.token)
                    localStorage.setItem('role', res.role)
                    dispatch(studentIsLoggedIn())
                }
            })
            .catch((error) => {
                alert(error.message)
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

export { startLoginStudent, studentErrors, studentIsLoggedIn }