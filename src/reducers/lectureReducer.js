const lectureInitialState = {
    isLoading : false,
    errors : {},
    data : []
}

const lectureReducer = ( state=lectureInitialState, action ) => {
    switch (action.type) {
        case 'LECTURES_ERRORS' : {
            let result
            for( const key in action.payload ){
                result = { ...result , [key] : action.payload[key].message }
            }
            return { ...state, errors : { ...result} }
        }
        case 'LECTURE_LOADING' : {
            return { ...state, isLoading : !state.isLoading }
        } 
        case 'CREATE_LECTURE' : {
            return { ...state, data : [ ...state.data, { ...action.payload } ] }
        }
        case 'ALL_LECTURES' : {
            return { ...state, data : [...action.payload] }
        }
        case 'EDIT_LECTURE' : {
            const result = state.data.map((lecture) => {
                if( lecture._id === action.payload._id ){
                    return { ...lecture, ...action.payload }
                }else{
                    return { ...lecture }
                }
            })
            return { ...state, data : [...result] }
        }
        case 'DELETE_LECTURE' : {
            const result = state.data.filter((lecture) => {
                return lecture._id !== action.payload._id
            })
            return { ...state, data : [...result] }
        }
        case 'ADMIN_LOGOUT' : {
            return { ...lectureInitialState }
        }
        default : {
            return { ...state }
        }
    }
}

export default lectureReducer