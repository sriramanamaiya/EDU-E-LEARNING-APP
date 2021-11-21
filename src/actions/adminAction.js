import axios from 'axios'

const baseUrl = 'https://dct-e-learning.herokuapp.com/api'

const startRegisteradmin = (userData, redirect) => {
    console.log(userData)
    return (dispatch) => {
        axios.post(`${baseUrl}/admin/register`, userData)
            .then((response) => {
                const result = response.data
                console.log(result)
                if( result.hasOwnProperty('message') ){
                    dispatch(serverMessage(result.errors))
                }else{
                    console.log(result)
                    if( result.hasOwnProperty('errors') ){
                        dispatch(serverMessage(result))
                    }else{
                        dispatch(serverMessage(result))
                        redirect()
                    }
                }
            })
            .catch((error) => {
                if( error.message.includes('406') ){
                    dispatch(serverMessage({errors : 'Email or name already created'}))
                }else{
                    alert(error.message)
                }
            })
    }
}

const serverMessage = (errors) => {
    return {
        type : 'SERVER-MESSAGE',
        payload : errors
    }
}

const startLogin = (userData, redirect) => {
    return (dispatch) => {
        axios.post(`${baseUrl}/admin/login`, userData)
            .then((response) => {
                const result = response.data
                console.log(result)
                if( result.hasOwnProperty('errors') ){
                    dispatch(serverMessage(result))
                }else{
                    localStorage.setItem('token', result.token)
                    redirect()
                    dispatch(loggedIn())
                    dispatch(startGetAdminAccount(result.token))
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
                dispatch(editedAccountDetails(response.data))
                handleToggle()
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

export { startRegisteradmin, serverMessage, startLogin, loggedIn, startGetAdminAccount, startEditAdminAccount }