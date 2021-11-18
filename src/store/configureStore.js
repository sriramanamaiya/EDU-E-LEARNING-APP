import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import adminReducer from '../reducers/adminReducer'
import studentsReducer from '../reducers/studentsReducer'

const configureStore = () => {
    const store = createStore(combineReducers({
        admin : adminReducer,
        students : studentsReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore