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
                    dispatch(serverMessage({'notice' : 'Signed in successfully.'}))
                    dispatch(loggedIn())
                    redirect()
                }
            })
    }
}

const loggedIn = (props) => {
    return {
        type : 'LOGGEDIN'
    }
}

export { startRegisteradmin, serverMessage, startLogin, loggedIn }