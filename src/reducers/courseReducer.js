const courseInitialState = {
    errors : {},
    data : []
}

const courseReducer = (state = courseInitialState, action ) => {
    switch( action.type ){
        case 'COURSE-ERRORS' : {
            let result
                for( const key in action.payload ){
                    result = { ...result , [key] : action.payload[key].message }
                }
            return { ...state, errors : { ...result} }
        }
        case 'CREATE-COURSE' : {
            return { ...state, data : [ ...state.data, {...action.payload} ] }
        }
        case 'GET-ALL-COURSE' : {
            return { ...state, data : [ ...action.payload ] }
        }
        case 'EDIT-COURSE' : {
            const result = state.data.map((course) => {
                if( course._id === action.payload._id ){
                    return { ...course, ...action.payload }
                }else{
                    return { ...course }
                }
            })
            return { ...state, data : [ ...result ] }
        }
        case 'DELETE-COURSE' : {
            const result = state.data.filter((course) => {
                return course._id !== action.payload
            })
            return { ...state, data : [...result] }
        }
        case 'ADMIN-LOGOUT' : {
            return { ...courseInitialState }
        }
        default : {
            return { ...state }
        }
    }
}

export default courseReducer