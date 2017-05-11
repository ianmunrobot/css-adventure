import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import resetDefaults from './redux/resetDefaults'

import './LevelAdvance.css'

const LevelAdvance = ({challengeNumber, player}) => {
  const handleSubmit = e => {
    e.preventDefault()
    resetDefaults()
    browserHistory.push(`/css-adventure/challenges/${challengeNumber + 1}`)
  }

  return (
    <div className="full-overlay">
      <div className="level-advance">
        <h3 className="introAlert">
          <p>Congratulations {player.name}!</p>
          <p>You have completed task {challengeNumber}!</p>
        </h3>
        <button type="submit" onClick={handleSubmit} className="levelButton introText">
          Progress to task { challengeNumber + 1 }
        </button>
      </div>
    </div>
  )
}

const mapState = ({challengeNumber, player}) => ({
  challengeNumber,
  player,
})

export default connect(mapState)(LevelAdvance)