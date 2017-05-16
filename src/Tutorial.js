import React from 'react'
import { connect } from 'react-redux'

import { setChallengeStatus } from './redux/reducers/challengeStatusReducer'

import './Start.css'

const Tutorial = ({ closeTutorial }) => {

  return (
    <div className="startBg full-overlay" >
      <div className="alerts">
        <div className="alertPanel">
          <div className="innerPanel">
            <h3 className="introAlert">Tutorial</h3>
            <p className="introText">
              Solve problems by writing CSS styles in order to solve the issued displayed in the lower-lefthand console
            </p>
            <p className="introText">You can mouse over relevant elements in order to set their properties. You can use any kind of <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors" target="_blank">selectors</a>, but classes should be enough to get you through the challenge. If you want, you can also use your browser's developer tools to inspect elements, but this app was built with React, so there may be lots of nested elements!</p>
            <p className="introText">To add your styles to the DOM, you can press the 'ADD RULE' or use the CMD Enter keyboard shortcut</p>
            <button type="submit" onClick={closeTutorial} className="levelButton introText">
              I got it! Put me in, coach!
            </button>
            <p className="introText">Check us out on <a href="https://github.com/ianmunrobot/css-adventure" target="_blank">github!</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatch = (dispatch => ({
  closeTutorial: () => {
    dispatch(setChallengeStatus('incomplete'))
  }
}))

export default connect(null, mapDispatch)(Tutorial)