import React from 'react'
import { connect } from 'react-redux'

import './Challenge2.css'

const Challenge2 = (props) => {

  // image path names for 'inventory items'
  const imageNames = ['Hammer1-64', 'Screwdriver1-64', 'Laptop1-64', 'CopperWire1-64', 'HoverPad1-64', 'LightBulb1-64', 'SolderingIron1-64']

  const inventory = imageNames.map((path, id) => (
    <li className="inventory-li" key={id} data-tip data-for="class" onMouseOver={props.handleHover}>
      <img className="inventory-image" src={`/img/${path}.png`} alt="" onMouseOver={props.handleHover}/>
    </li>
  ))

  return (
    <div className="row wrapper challengeWrapper">
      <div className="col-xs-6">
        <img className="robot" id="robot-2" src="/img/robot 1-animation (no height change).gif" alt="" data-tip data-for="class" onMouseOver={props.handleHover}/>
      </div>
      <div className="col-xs-6">
        <ul>
          {inventory}
        </ul>
      </div>
    </div>
  )
}

const mapState = ({rules}) => ({
  rules
})

const mapDispatch = (dispatch) => ({

})

export default connect(mapState, mapDispatch)(Challenge2)