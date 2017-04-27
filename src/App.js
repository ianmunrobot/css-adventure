import React from 'react'
import './App.css'
import TextInput from './TextInput'

const App = ({ children }) => {
  return (
    <div className="App">
      <div className="App-header">
        <h2>CSS Adventure</h2>
      </div>
      { children }
      <div className="text-input">
        <TextInput />
      </div>
    </div>
  )
}

export default App