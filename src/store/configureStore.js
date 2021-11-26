import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import adminReducer from '../reducers/adminReducer'
import adminstudentsReducer from '../reducers/adminStudentsReducer'
import courseReducer from '../reducers/courseReducer'
import studentReducer from '../reducers/studentReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        admin : adminReducer,
        adminStudents : adminstudentsReducer,
        course : courseReducer,
        student : studentReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore