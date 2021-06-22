import {applyMiddleware, combineReducers, createStore} from 'redux'
import {TaskReducer} from './reducers/TaskReducer'
import reduxThunk from 'redux-thunk'

const rootReducer = combineReducers({
    TaskReducer
})

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));