import { combineReducers } from 'redux'
import styles from './styleReducer'
import tests from './testReducer'
import challengeText from './challengeTextReducer'
import challenge from './challengeReducer'
import player from './playerReducer'

export default combineReducers({
  styles,
  tests,
  challenge,
  challengeText,
  player,
})