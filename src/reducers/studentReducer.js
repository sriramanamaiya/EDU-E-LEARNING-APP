const studentInitialState = {
    studentLoggedIn : false,
    errors : {},
    data : {},
}

const studentReducer = ( state = studentInitialState, action ) => {
    switch (action.type) {
        case 'STUDENT-ERRORS' : {
            return { ...state, errors : { ...action.payload } }
        }
        case 'STUDENT-LOGGED_IN' : {
            return { ...state, studentLoggedIn: !state.studentLoggedIn }
        }
        default : {
            return { ...state }
        }
    }
}

export default studentReducer