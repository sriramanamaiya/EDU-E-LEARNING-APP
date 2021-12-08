import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl = 'https://dct-e-learning.herokuapp.com/api'

const startCreateLecture = (id,data) => {
    return (dispatch) => {
        axios.post(`${baseUrl}/courses/${id}/lectures`, data, {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                if( result.hasOwnProperty('errors')){
                    dispatch(lecturesErrors(result.errors))
                }else{
                    dispatch(createLecture(result))
                }
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
    }
}

const lecturesErrors = (data) => {
    return {
        type : 'LECTURES_ERRORS',
        payload : data
    }
}

const createLecture = (data) => {
    return {
        type : 'CREATE_LECTURE',
        payload : data
    }
}

const startGetAllLectures = (id) => {
    return (dispatch) => {
        axios.get(`${baseUrl}/courses/${id}/lectures` , {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                dispatch(allLectures(response.data))
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
    }
}

const allLectures= (data) => {
    return {
        type : 'ALL_LECTURES',
        payload : data
    }
}

const startEditLecture = (courseId,id,data, handleShowClose) => {
    return (dispatch) => {
        axios.put(`${baseUrl}/courses/${courseId}/lectures/${id}`, data, {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                const result = response.data
                if( result.hasOwnProperty('errors')){
                    dispatch(lecturesErrors(result.errors))
                }else{
                    dispatch(editLecture(result))
                    handleShowClose()
                }
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
    }
}

const editLecture = (data) => {
    return {
        type : 'EDIT_LECTURE',
        payload : data
    }
}

const startDeleteLecture = (courseId, id) => {
    return (dispatch) => {
        axios.delete(`${baseUrl}/courses/${courseId}/lectures/${id}`, {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                dispatch(deleteLecture(response.data))
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
    }
}

const deleteLecture = (data) => {
    return {
        type : 'DELETE_LECTURE',
        payload : data
    }
}

export { startCreateLecture, startGetAllLectures, lecturesErrors, startEditLecture, startDeleteLecture, allLectures }