import React from 'react'
import TextInput from './TextInput'
import ChallengeText from './ChallengeText'
import StyleNode from './StyleNode'

import './App.css'

const App = ({ children }) => {
  return (
    <div className="container-fluid">
      { children }
      <div className="row console">
        <ChallengeText />
        <TextInput />
        <StyleNode />
      </div>
    </div>
  )
}

export default App