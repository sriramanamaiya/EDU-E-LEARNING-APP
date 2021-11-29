const studentInitialState = {
    studentLoggedIn : false,
    isLoading : false,
    errors : {},
    accountData : {},
    data : [],
}

const studentReducer = ( state = studentInitialState, action ) => {
    switch (action.type) {
        case 'STUDENT-ERRORS' : {
            return { ...state, errors : { ...action.payload } }
        }
        case 'STUDENT-LOGGED_IN' : {
            return { ...state, studentLoggedIn: !state.studentLoggedIn }
        }
        case 'STUDENT-LOADING' : {
            return { ...state, isLoading : !state.isLoading }
        }
        case 'STUDENT-ACCOUNT-INFO' : {
            return { ...state, accountData : { ...action.payload } }
        }
        case 'ENROLL-UNROLL-STUDENT-COURSE' : {
            const result = state.data.map((course) => {
                if( course._id === action.payload._id ){
                    return { ...course, ...action.payload }
                }else{
                    return { ...course }
                }
            })
            return { ...state, data : [ ...result ]}
        }
        case 'ALL-COURSE-STUDENT' : {
            return { ...state, data : [ ...action.payload ] }
        }
        case 'STUDENT-LOGOUT' : {
            return { ...studentInitialState }
        }
        default : {
            return { ...state }
        }
    }
}

export default studentReducer