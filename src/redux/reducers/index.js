import { combineReducers } from 'redux'
import rules from './ruleReducer'
import tests from './testReducer'
import challengeText from './challengeTextReducer'
import challenge from './challengeReducer'

export default combineReducers({
  rules,
  tests,
  challenge,
  challengeText,
})