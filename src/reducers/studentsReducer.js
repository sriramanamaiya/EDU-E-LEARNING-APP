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
        default : {
            return { ...state }
        }
    }
}

export default studentsReducer