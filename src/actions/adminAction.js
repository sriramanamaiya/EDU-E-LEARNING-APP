import axios from 'axios'
import Swal from 'sweetalert2'
import jwt_decode from 'jwt-decode'

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
                    alert(error.message)
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
                    dispatch(loggedIn())
                    dispatch(startGetAdminAccount(result.token))
                    redirect()
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

const loggedIn = () => {
    return {
        type : 'LOGGEDIN'
    }
}

const startGetAdminAccount = (token) => {
    return (dispatch) => {
        dispatch(loading())
        axios.get(`${baseUrl}/admin/account`, {
            headers : {
                "Authorization" : token
            }
        })
            .then((response) => {
                dispatch(loading())
                dispatch(adminAccount(response.data))
            })
            .catch((error) => {
                alert(error.message)
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
            .catch((err) => {
                alert(err.message)
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

export { startRegisteradmin, adminAuthErrors, startLogin, loggedIn, startGetAdminAccount, startEditAdminAccount, adminLogOut }