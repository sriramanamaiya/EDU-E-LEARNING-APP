const adminInitialState = {
    isLoggedIn : false,
    message : {},
    data : {},
}

const adminReducer = ( state = adminInitialState, action ) => {
    switch ( action.type ) {
        case 'SERVER-MESSAGE' : {
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
        case 'LOGGEDIN' : {
            return { ...state, isLoggedIn : !state.isLoggedIn }
        }
        case 'ADMIN-ACCOUNT' : {
            return { ...state, data : { ...action.payload } }
        }
        case 'EDITED-ACCOUNT' : {
            return { ...state, data : { ...state.data, ...action.payload } }
        }
        default : {
            return { ...state }
        }
    }
}

export default adminReducer