import React from 'react'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import resetDefaults from './redux/resetDefaults'

const Ending = ({player}) => {
  const handleSubmit = e => {
    e.preventDefault()
    resetDefaults()
    browserHistory.push(`/`)
  }
  return (
    <div className="full-overlay">
      <div className="level-advance">
        <h3 className="introAlert">Congratulations {player.name}!</h3>
          <p className="introText">You have completed all the tasks we currently have!</p>
          <p className="introText">Care to contribute more challenges? Visit us on <a href="https://github.com/ianmunrobot/css-adventure" target="_blank">github</a> and get started!</p>
          <button type="submit" onClick={handleSubmit} className="levelButton introText">
          Back to the beginning
        </button>
      </div>
    </div>
  )
}

const mapState = ({player}) => ({ player })

export default connect(mapState)(Ending)