const adminstudentsInitialState = {
    errors : {},
    data : [],
}

const adminstudentsReducer = ( state = adminstudentsInitialState, action ) => {
    switch ( action.type ) {
        case 'STUDENT-AUTH-ERRORS' : {
            if( action.payload.hasOwnProperty('errors') || action.payload.hasOwnProperty('notice') ){
                return { ...state, errors : { ...action.payload } }
            }else{
                let result
                for( const key in action.payload ){
                    result = { ...result , [key] : action.payload[key].message }
                }
                return { ...state, errors : { ...result} }
            }
        }
        case 'REGISTERED-STUDENT' : {
            return { ...state, data : [ ...state.data, action.payload ] }
        }
        case 'ALL-STUDENTS' : {
            return { ...state, data : [ ...action.payload ] }
        }
        case 'EDITED-STUDENT-DETAILS' : {
            const result = state.data.map((stud) => {
                if( stud._id === action.payload._id ){
                    return { ...stud, ...action.payload }
                }else{
                    return { ...stud }
                }
            })
            return { ...state, data : [ ...result ] }
        }
        case 'DELETE-STUDENT' : {
            const result = state.data.filter((stud) => {
                return stud._id !== action.payload._id
            })
            return { ...state, data : [ ...result ] }
        }
        case 'ADMIN-LOGOUT' : {
            return { ...adminstudentsInitialState }
        }
        default : {
            return { ...state }
        }
    }
}

export default adminstudentsReducer