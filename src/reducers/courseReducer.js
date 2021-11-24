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
        default : {
            return { ...state }
        }
    }
}

export default courseReducer