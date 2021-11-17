const adminInitialState = {
    message : {},
    data : {},
}

const adminReducer = ( state = adminInitialState, action ) => {
    switch ( action.type ) {
        case 'SERVER-MESSAGE' : {
            if( action.payload.hasOwnProperty('errors') ){
                return { ...state, message : { ...action.payload } }
            }else{
                let result
                for( const key in action.payload ){
                    result = { ...result , [key] : action.payload[key].message }
                }
                return { ...state, message : { ...result} }
            }
        }
        default : {
            return { ...state }
        }
    }
}

export default adminReducer