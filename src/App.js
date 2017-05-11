import React from 'react'
import { connect } from 'react-redux'

import TextInput from './TextInput'
import ChallengeText from './ChallengeText'
import StyleNode from './StyleNode'
import LevelAdvance from './LevelAdvance'

import './App.css'

const App = ({ children, challengeStatus }) => {
  return (
    <div className="container-fluid">
      { challengeStatus === 'complete' ? <LevelAdvance /> : null }
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

export default connect(mapState)(App)