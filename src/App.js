import React from 'react'
import { connect } from 'react-redux'

import TextInput from './TextInput'
import ChallengeText from './ChallengeText'
import StyleNode from './StyleNode'
import LevelAdvance from './LevelAdvance'
import Ending from './Ending'
import Tutorial from './Tutorial'

import { setChallengeStatus } from './redux/reducers/challengeStatusReducer'

import './App.css'

const App = ({ children, challengeStatus, openTutorial }) => {
  return (
    <div className="container-fluid">
      { challengeStatus === 'incomplete' && <button className="tutorialOpen" onClick={openTutorial}>?</button> }
      { challengeStatus === 'complete' && <LevelAdvance />}
      { challengeStatus === 'all-complete' && <Ending />}
      { challengeStatus === 'tutorial' && <Tutorial />}
      { children }
      <div className="row console">
        <ChallengeText />
        <TextInput />
        <StyleNode />
      </div>
    </div>
  )
}

const mapState = ({ challengeStatus }, { children }) => ({
  challengeStatus,
  children,
})

const mapDispatch = (dispatch => ({
  openTutorial: () => {
    dispatch(setChallengeStatus('tutorial'))
  }
}))

export default connect(mapState, mapDispatch)(App)