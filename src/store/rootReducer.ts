import { combineReducers } from 'redux'
import { selector } from '../selector/selector.reducer'
import { table } from '../table/table.reducer'

const rootReducer = combineReducers({ selector, table })
export default rootReducer
