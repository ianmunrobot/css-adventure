import React from 'react'
import { connect } from 'react-redux'

import './ChallengeText.css'

const ChallengeText = ({challengeText}) => {
  const text = challengeText.split('\n').map(line => `> ${line}`).join('\n')
  return (
    <div className="col-xs-4">
      <div className="challenge-text-container">
        <p className="challenge-text">{text}</p>
      </div>
    </div>
  )
}

const mapState = ({challengeText}) => ({
  challengeText,
})

export default connect(mapState)(ChallengeText)