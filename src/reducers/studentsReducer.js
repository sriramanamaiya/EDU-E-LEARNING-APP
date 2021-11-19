const studentsInitialState = {
    message : {},
    data : [],
}

const studentsReducer = ( state = studentsInitialState, action ) => {
    switch ( action.type ) {
        case 'STUDENT-SERVER-MESSAGE' : {
            if( action.payload.hasOwnProperty('errors') || action.payload.hasOwnProperty('notice') ){
                return { ...state, message : { ...action.payload } }
            }else{
                let result
                for( const key in action.payload ){
                    result = { ...result , [key] : action.payload[key].message }
                }
                return { ...state, message : { ...result} }
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
        default : {
            return { ...state }
        }
    }
}

export default studentsReducer