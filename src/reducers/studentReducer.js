const studentInitialState = {
    studentLoggedIn : false,
    isLoading : false,
    errors : {},
    accountData : {},
    data : []
}

const studentReducer = ( state = studentInitialState, action ) => {
    switch (action.type) {
        case 'STUDENT_ERRORS' : {
            return { ...state, errors : { ...action.payload } }
        }
        case 'STUDENT_LOGGED_IN' : {
            return { ...state, studentLoggedIn: !state.studentLoggedIn }
        }
        case 'STUDENT_LOADING' : {
            return { ...state, isLoading : !state.isLoading }
        }
        case 'STUDENT_ACCOUNT_INFO' : {
            return { ...state, accountData : { ...action.payload } }
        }
        case 'ADD_ENROLL_COURSE' : {
            return { ...state, data : [ ...state.data, action.payload ] }
        }
        case 'REMOVE_UNENROLL_COURSE' : {
            const result = state.data.filter((course) => {
                return course._id !== action.payload._id
            })
            return { ...state, data : [ ...result ] }
        }
        case 'ALL_COURSE_STUDENT' : {
            return { ...state, data : [ ...action.payload ] }
        }
        case 'STUDENT_LOGOUT' : {
            return { ...studentInitialState }
        }
        default : {
            return { ...state }
        }
    }
}

export default studentReducer