const lectureInitialState = {
    isLoading : false,
    errors : {},
    data : []
}

const lectureReducer = ( state=lectureInitialState, action ) => {
    switch (action.type) {
        case 'ALL_LECTURES' : {
            return { ...state, data : [...action.payload] }
        }
        case 'LECTURES_ERRORS' : {
            let result
                for( const key in action.payload ){
                    result = { ...result , [key] : action.payload[key].message }
                }
            return { ...state, errors : { ...result} }
        }
        case 'CREATE_LECTURE' : {
            return { ...state, data : [ ...state.data, { ...action.payload } ] }
        }
        case 'ADMIN-LOGOUT' : {
            return { ...lectureInitialState }
        }
        default : {
            return { ...state }
        }
    }
}

export default lectureReducer