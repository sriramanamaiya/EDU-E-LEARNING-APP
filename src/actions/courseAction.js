import axios from 'axios'

const baseUrl = 'https://dct-e-learning.herokuapp.com/api'
const token = localStorage.getItem('token')

const startCreateCourse = (data) => {

    return (dispatch) => {
        axios.post(`${baseUrl}/courses`, data , {
            headers : {
                'Authorization' : token
            }
        })
            .then((response) => {
                const result = response.data
                if( result.hasOwnProperty('errors') ){
                    dispatch(courseServerMessage(result.errors))
                }else{
                    dispatch(createCourse(result))
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

const courseServerMessage = (data) => {
    return {
        type : 'COURSE-SERVER-MESSAGE',
        payload : data
    }
}

export { startCreateCourse, courseServerMessage }