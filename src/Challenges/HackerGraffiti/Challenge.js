import React from 'react'
import { connect } from 'react-redux'

import './Challenge.css'

const Challenge3 = (props) => {
  return (
    <div className="row challengeWrapper wrapper-3">
      <div className="col-xs-12">
        <img className="robot" id="robot-3" src="/img/robot 1-animation (no height change).gif" alt="" data-tip data-for="class" onMouseOver={props.handleHover}/>
        <span className="hackThePlanet" data-tip data-for="class" id="hack1" onMouseOver={props.handleHover}>HACK THE PLANET</span>
        <span className="hackThePlanet2" data-tip data-for="class" id="hack2" onMouseOver={props.handleHover}>HACKERZ 4 EVA</span>
        <p className="hackThePlanet3" data-tip data-for="class" id="hack3" onMouseOver={props.handleHover}>RIGHTEOUS HACKS</p>
        <img className="hack-img" src="/img/Hack1.png"  data-tip data-for="class" id="hack4" alt="" onMouseOver={props.handleHover}/>
      </div>
    </div>
  )
}


const mapState = ({rules}) => ({
  rules
})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Challenge3)