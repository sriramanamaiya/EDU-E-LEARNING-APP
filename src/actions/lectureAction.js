import axios from 'axios'
import Swal from 'sweetalert2'

const baseUrl = 'https://dct-e-learning.herokuapp.com/api'

const startCreateLecture = (id,data) => {
    return (dispatch) => {
        axios.post(`${baseUrl}/course/${id}/lectures`, data, {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                console.log(response.data)
            })
    }
} 

const startGetAllLectures = (id) => {
    return (dispatch) => {
        axios.get(`${baseUrl}/course/${id}/lectures` , {
            headers : {
                'Authorization' : localStorage.getItem('token')
            }
        })
            .then((response) => {
                console.log(response.data)
            })
            .catch((error) => {
                Swal.fire(error.message)
            })
    }
}

export { startCreateLecture, startGetAllLectures }