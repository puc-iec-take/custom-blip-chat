import {createStore, combineReducers} from 'redux'
import appKey from '../reducers/appKey'
import customStyle from '../reducers/customStyle'
import isChatBuild from '../reducers/isChatBuild'


const store = createStore(combineReducers({
    key:appKey,
    styles:customStyle,
    build:isChatBuild
}))

export default store