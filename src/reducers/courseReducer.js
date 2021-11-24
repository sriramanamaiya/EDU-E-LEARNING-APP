const courseInitialState = {
    message : {},
    data : []
}

const courseReducer = (state = courseInitialState, action ) => {
    switch( action.type ){
        case 'COURSE-SERVER-MESSAGE' : {
            let result
                for( const key in action.payload ){
                    result = { ...result , [key] : action.payload[key].message }
                }
            return { ...state, message : { ...result} }
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
        default : {
            return { ...state }
        }
    }
}

export default courseReducer