import React from 'react'
import TextInput from './TextInput'
import ChallengeText from './ChallengeText'

import './App.css'

const App = ({ children }) => {
  return (
    <div className="container-fluid">
      { children }
      <div className="row console">
        <ChallengeText />
        <TextInput />
      </div>
    </div>
  )
}

export default App