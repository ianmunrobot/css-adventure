import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { setPlayerName } from './redux/reducers/playerReducer'

import './Start.css'

const handleSubmit = e => {
  e.preventDefault()
  setPlayerName(e.target.playerName.value)
  browserHistory.push('/challenges/2')
}

const Start = ({ setPlayerName }) => {
  return (
    <div className="startBg" >
      <div>
        <img className="robot-start" id="robot-start" src="/img/robot 1-animation (no height change).gif" alt=""/>
      </div>
      <div className="alerts">
        <div className="alertPanel">
          <div className="innerPanel">
            <h3 className="introAlert">Alert! Alert!</h3>
            <p className="introText">
              {`We have been hacked! As you can see a hacker has destroyed the beautiful styling on our mainframe. Engineer #${Math.floor(Math.random() * 80000)}, you must aid us and restore the styling to normal!`}
            </p>
          </div>
        </div>
        <div className="namePanel">
          <div className="innerPanel">
            <p className="introText nameText">
              Enter your name for employee verification
            </p>
            <form onSubmit={handleSubmit}>
              <input name="playerName" type="text" className="nameEntry" />
              <button type="submit" className="introText nameButton">
                Save us now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatch = { setPlayerName }

export default connect(null, mapDispatch)(Start)