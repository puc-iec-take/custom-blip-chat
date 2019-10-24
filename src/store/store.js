import {createStore, combineReducers} from 'redux'
import appKey from '../reducers/appKey'
import customStyle from '../reducers/customStyle'


const store = createStore(combineReducers({
    key:appKey,
    styles:customStyle
}))

export default store