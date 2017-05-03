import React from 'react'
import { connect } from 'react-redux'

import './ChallengeText.css'

const ChallengeText = ({challengeText}) => {
  const text = challengeText.split('\n').map((line, index)=> <p key={index} className="challenge-text">{`> ${line}`}</p>)
  return (
    <div className="col-xs-4">
      <div className="challenge-text-container">
        {text}
      </div>
    </div>
  )
}

const mapState = ({challengeText}) => ({
  challengeText,
})

export default connect(mapState)(ChallengeText)