import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { connect } from 'react-redux'

import store from './redux'
import { setChallenge } from './redux/reducers/challengeReducer'

import App from './App';
import Challenge1 from './Challenges/Challenge1'
import Challenge2 from './Challenges/Challenge2'
import Challenges from './Challenges/Challenges'

const setCurrentChallenge = (nextRouterState) => {
  const challenge = nextRouterState.params.challengeId
  store.dispatch(setChallenge(challenge))
}

const Routes = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="/challenges/:challengeId" onEnter={setCurrentChallenge} component={Challenges} />
      </Route>
    </Router>
  )
}

export default Routes