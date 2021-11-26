import axios from 'axios'

const baseUrl = 'https://dct-e-learning.herokuapp.com/api'

const startCreateCourse = (data, handleRedirect) => {
    return (dispatch) => {
        axios.post(`${baseUrl}/courses`, data , {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                if( result.hasOwnProperty('errors') ){
                    dispatch(courseErrors(result.errors))
                }else{
                    dispatch(createCourse(result))
                    handleRedirect()
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

const createCourse = (data) => {
    return {
        type : 'CREATE-COURSE',
        payload : data
    }
}

const courseErrors = (data) => {
    return {
        type : 'COURSE-ERRORS',
        payload : data
    }
}

const startGetAllCourse = () => {
    return (dispatch) => {
        axios.get(`${baseUrl}/courses`,{
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                dispatch(getAllCourse(response.data))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

const getAllCourse = (data) => {
    return {
        type : 'GET-ALL-COURSE',
        payload : data
    }
}

const startDeleteCourse = (id) => {
    return (dispatch) => {
        axios.delete(`${baseUrl}/courses/${id}`, {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                dispatch(deleteCourse(response.data._id))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

const deleteCourse = (id) => {
    return {
        type : 'DELETE-COURSE',
        payload : id
    }
}

const startEditCourse = (id,data, handleClose) => {
    return (dispatch) => {
        axios.put(`${baseUrl}/courses/${id}`, data, {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                if( result.hasOwnProperty('errors') ){
                    dispatch(courseErrors(result.errors))
                }else{
                    dispatch(editCourse(result))
                    handleClose()
                }
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

const editCourse = (data) => {
    return {
        type : 'EDIT-COURSE',
        payload : data
    }
}

export { startCreateCourse, courseErrors, startGetAllCourse, startDeleteCourse, startEditCourse }