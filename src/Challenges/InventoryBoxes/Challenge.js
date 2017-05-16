import React from 'react'
import { connect } from 'react-redux'
import Tooltip from '../../Tooltip'

import './Challenge.css'

import hammer from '../../img/Hammer1-128.png'
import screwdriver from '../../img/Screwdriver1-128.png'
import laptop from '../../img/Laptop1-128.png'
import copperWire from '../../img/CopperWire1-128.png'
import hoverPad from '../../img/HoverPad1-128.png'
import lightBulb from '../../img/LightBulb1(on)-128.png'
import solderingIron from '../../img/SolderingIron1-128.png'
import lightBulbOff from '../../img/LightBulb1(off)-128.png'
import battery from '../../img/PowerBattery-128.png'

import robot from '../../img/robot1-animation(no-height-change).gif'

const InventoryBoxes = (props) => {

  // image path names for 'inventory items'
  const imageNames = [hammer, screwdriver, laptop, copperWire, hoverPad, lightBulb, solderingIron, lightBulbOff, battery]

  const inventory = imageNames.map((image, id) => (
    <li className="inventory-li" key={id} id={`inventory${id}`} data-tip data-for="class" onMouseOver={props.handleHover}>
      <img className="inventory-image" src={image} alt="" onMouseOver={props.handleHover}/>
    </li>
  ))

  return (
    <div className="row wrapper challengeWrapper">
      <Tooltip classNamesToDisplay={props.classNames}/>
      <div className="col-xs-4">
        <img className="robot" id="robot-2" src={robot} alt="" data-tip data-for="class" onMouseOver={props.handleHover}/>
      </div>
      <div className="col-xs-8">
        <ul className="inventory-ul">
          { inventory }
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

export default connect(mapState, mapDispatch)(InventoryBoxes)