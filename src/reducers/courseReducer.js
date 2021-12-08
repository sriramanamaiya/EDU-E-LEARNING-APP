const courseInitialState = {
    errors : {},
    data : []
}

const courseReducer = (state = courseInitialState, action ) => {
    switch( action.type ){
        case 'COURSE_ERRORS' : {
            let result
                for( const key in action.payload ){
                    result = { ...result , [key] : action.payload[key].message }
                }
            return { ...state, errors : { ...result} }
        }
        case 'CREATE_COURSE' : {
            return { ...state, data : [ ...state.data, {...action.payload} ] }
        }
        case 'ALL_COURSE' : {
            return { ...state, data : [ ...action.payload ] }
        }
        case 'EDIT_COURSE' : {
            const result = state.data.map((course) => {
                if( course._id === action.payload._id ){
                    return { ...course, ...action.payload }
                }else{
                    return { ...course }
                }
            })
            return { ...state, data : [ ...result ] }
        }
        case 'DELETE_COURSE' : {
            const result = state.data.filter((course) => {
                return course._id !== action.payload
            })
            return { ...state, data : [...result] }
        }
        case 'ENROLL_UNROLL_STUDENTS' : {
            const result = state.data.map((course) => {
                if( course._id === action.payload._id ){
                    return { ...course, ...action.payload }
                }else{
                    return { ...course }
                }
            })
            return { ...state, data : [ ...result ] }
        }
        case 'ADMIN_LOGOUT' : {
            return { ...courseInitialState }
        }
        default : {
            return { ...state }
        }
    }
}

export default courseReducer