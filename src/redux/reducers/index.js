import { combineReducers } from 'redux'
import styles from './styleReducer'
import tests from './testReducer'
import challengeText from './challengeTextReducer'
import challenge from './challengeReducer'
import player from './playerReducer'
import challengeSpecificProps from './challengeSpecificProps'
import challengeNumber from './challengeNumberReducer'
import challengeStatus from './challengeStatusReducer'

export default combineReducers({
  styles,
  tests,
  challenge,
  challengeText,
  challengeSpecificProps,
  challengeNumber,
  challengeStatus,
  player,
})