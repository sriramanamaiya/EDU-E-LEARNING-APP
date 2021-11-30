import axios from 'axios'
import Swal from 'sweetalert2'
import jwt_decode from 'jwt-decode'

import { allStudents } from './adminstudentsAction'
import { allCourse } from './courseAction'

const baseUrl = 'https://dct-e-learning.herokuapp.com/api'

const startRegisteradmin = (userData, redirect) => {

    return (dispatch) => {
        axios.post(`${baseUrl}/admin/register`, userData)
            .then((response) => {
                const result = response.data
                if( result.hasOwnProperty('message') ){
                    dispatch(adminAuthErrors(result.errors))
                }else{
                    if( result.hasOwnProperty('errors') ){
                        dispatch(adminAuthErrors(result))
                    }else{
                        Swal.fire({
                            icon: 'success',
                            title: result.notice,
                            showConfirmButton: false,
                            timer: 3000
                        })
                        redirect()
                    }
                }
            })
            .catch((error) => {
                if( error.message.includes('406') ){
                    dispatch(adminAuthErrors({errors : 'Email or academy name already Exist'}))
                }else{
                    Swal.fire(error.message)
                }
            })
    }
}

const adminAuthErrors = (errors) => {
    return {
        type : 'ADMIN-AUTH-ERRORS',
        payload : errors
    }
}

const startLogin = (userData, redirect) => {
    return (dispatch) => {
        axios.post(`${baseUrl}/admin/login`, userData)
            .then((response) => {
                const result = response.data
                if( result.hasOwnProperty('errors') ){
                    dispatch(adminAuthErrors(result))
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
                    dispatch(loggedIn())
                    dispatch(startGetAdminStudentsCourses(result.token))
                    redirect()
                }
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
    }
}

const loggedIn = () => {
    return {
        type : 'LOGGEDIN'
    }
}

const startGetAdminStudentsCourses = (token) => {
    const url1 = axios.get(`${baseUrl}/admin/account`, {
        headers : {
            "Authorization" : token
        }
    }),
    url2 = axios.get(`${baseUrl}/admin/students`,{
        headers : {
            "Authorization" : token
        }
    }),
    url3 = axios.get(`${baseUrl}/courses`,{
        headers : {
            'Authorization' : token
        }
    })

    return (dispatch) => {
        dispatch(loading())
        Promise.all([url1,url2,url3])
            .then((response) => {
                const [ account, student, course ] = response
                dispatch(loading())
                dispatch(adminAccount(account.data))
                dispatch(allStudents(student.data))
                dispatch(allCourse(course.data))
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
    }
} 

const adminAccount = (adminData) => {
    return {
        type : 'ADMIN-ACCOUNT',
        payload : adminData
    }
}

const startEditAdminAccount = (editedData, handleToggle) => {
    return (dispatch) => {
        axios.put(`${baseUrl}/admin`, editedData , {
            headers : {
                "Authorization" : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                if( result.hasOwnProperty('message') ){
                    dispatch(adminAuthErrors(result.errors))
                }else{
                    if( result.hasOwnProperty('errors') ){
                        dispatch(adminAuthErrors(result))
                    }else{
                        dispatch(editedAccountDetails(response.data))
                        handleToggle()
                    }
                }
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
    }
}

const editedAccountDetails = (data) => {
    return {
        type : 'EDITED-ACCOUNT',
        payload : data
    }
}

const loading = () => {
    return {
        type : 'ADMIN-LOADING'
    }
}

const adminLogOut = () => {
    return {
        type : 'ADMIN-LOGOUT'
    }
}

export { startRegisteradmin, adminAuthErrors, startLogin, loggedIn, startEditAdminAccount, 
    adminLogOut, startGetAdminStudentsCourses }