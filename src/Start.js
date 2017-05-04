import React from 'react'

import './Start.css'

const Start = (props) => {
  return (
    <div className="startBg" >
      <div>
        <img className="robot-start" id="robot-start" src="/img/robot 1-animation (no height change).gif" alt=""/>
      </div>
      <div className="alertPanel">
        <div className="innerPanel">
          <h3 className="introAlert">Alert! Alert!</h3>
          <p className="introText">
            {`We have been hacked! As you can see a hacker has destroyed the beautiful styling on our mainframe. Engineer #${Math.floor(Math.random() * 40000)}, you must aid us and restore the styling to normal!`}
          </p>
        </div>
      </div>
      <div className="namePanel">
        <div className="innerPanel">
          <p className="introText">
            Enter your name for employee verification
          </p>
          <input type="text" className="nameEntry">
          </input>
        </div>
      </div>
    </div>
  )
}

export default Start