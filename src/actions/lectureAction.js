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

export { startCreateLecture, startGetAllLectures, lecturesErrors }