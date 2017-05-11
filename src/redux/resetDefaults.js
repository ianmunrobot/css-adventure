import store from './'
import { setStyles } from './reducers/styleReducer'
import { setChallengeStatus } from './reducers/challengeStatusReducer'

export default () => {
  store.dispatch(setStyles(''))
  store.dispatch(setChallengeStatus('incomplete'))
}