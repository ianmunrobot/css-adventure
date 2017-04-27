import { combineReducers } from 'redux'
import rules from './ruleReducer'
import tests from './testReducer'

export default combineReducers({
  rules,
  tests,
})