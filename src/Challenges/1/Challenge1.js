import React from 'react'
import { connect } from 'react-redux'

import './Challenge1.css'

const Challenge1 = props => {
  return (
    <div className="wrapper">
      <div className="main-challenge">
        <div className="stuckFriend" id="stuckFriend" onMouseOver={props.handleHover}>
          {props.foundMessage}
        </div>
        <div className="box black-box-left" id="box-left" data-tip data-for="class" onMouseOver={props.handleHover}>
          txt left
        </div>
        <div className="box black-box-right" id="box-right" data-tip data-for="class" onMouseOver={props.handleHover}>
          txt right
        </div>
      </div>
    </div>
  )
}

const mapState = ({rules}) => ({
  rules
})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Challenge1)