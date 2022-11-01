import countReducer from './counterReducers'
import themeReducer from './themeReducers'


import { combineReducers } from 'redux'


const reducers = combineReducers({
    countReducer,
    themeReducer
})


export default reducers