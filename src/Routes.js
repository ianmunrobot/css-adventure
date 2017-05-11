import React from 'react'
import { Router, Route, browserHistory } from 'react-router'

import store from './redux'
import { setChallenge } from './redux/reducers/challengeReducer'
import { setChallengeText } from './redux/reducers/challengeTextReducer'
import { setTests } from './redux/reducers/testReducer'
import { setChallengeNumber } from './redux/reducers/challengeNumberReducer'
import { setChallengeStatus } from './redux/reducers/challengeStatusReducer'

import Start from './Start'
import App from './App'
import Challenges from './Challenges/SingleChallenge'
import allChallenges from './Challenges'

const setCurrentChallenge = (nextRouterState) => {
  const challengeId = +nextRouterState.params.challengeId

  if (challengeId > allChallenges.length) {
    store.dispatch(setChallengeStatus('all-complete'))
  } else {
    const currentChallengeData = allChallenges[challengeId - 1]
    store.dispatch(setChallenge(currentChallengeData.challengeComponent))
    store.dispatch(setChallengeText(currentChallengeData.prompt))
    store.dispatch(setTests(currentChallengeData.tests))
    store.dispatch(setChallengeNumber(challengeId))
  }
}

const Routes = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={Start} />
      <Route path='/challenges' component={App}>
        <Route path=":challengeId" onEnter={setCurrentChallenge} component={Challenges} />
      </Route>
      <Route path="*" onEnter={() => browserHistory.push('/')} />
    </Router>
  )
}

export default Routes