import React from 'react'
import { connect } from 'react-redux'
import Tooltip from '../../Tooltip'

import { setChallengeProps } from '../../redux/reducers/challengeSpecificProps'

import './Challenge.css'

import robot from '../../img/robot1-animation(no-height-change).gif'
import battery from '../../img/PowerBattery-128.png'
import lightbulbOn from '../../img/LightBulb1(on)-128.png'
import lightbulbOff from '../../img/LightBulb1(off)-128.png'
import lightLhElbow from '../../img/PowerConduit1(light-lhElbow)-128.gif'
import darkLhElbow from '../../img/PowerConduit1(dark-lhElbow)-128.png'
import darkVertical from '../../img/PowerConduit1(dark-vertical)-128.png'
import flashVertical from '../../img/PowerConduit1(flash-vertical)-128.gif'
import darkHorizontal from '../../img/PowerConduit1(dark-horizontal)-128.png'
import flashHorizontal from '../../img/PowerConduit1(flash-horizontal)-128.gif'

class PipeDream extends React.Component {

  componentDidMount() {
    this.props.setChallengeProps({
      lightbulb: false,
      topLeft: false,
      topMiddle: false,
      middleLeft: false,
      middleMiddle: false,
      bottomLeft: false,
      bottomMiddle: false,
      bottomRight: false,
    })
  }

  render() {
    const handleHover = this.props.handleHover
    const images = this.props.challengeSpecificProps
    return (
      <div className="row challengeWrapper wrapper-4">
        <Tooltip classNamesToDisplay={this.props.classNames}/>
        <div className="col-xs-4">
        <img className="robot" id="robot-2" src={robot} alt="" data-tip data-for="class" onMouseOver={handleHover}/>
        </div>
        <div className="col-xs-8">
          <table>
            <tbody>
              <tr>
                <td id="battery"><img src={ battery } alt="" className="battery" data-tip data-for="class" onMouseOver={handleHover} /></td>
                <td><img id="pipe-top-left" src={ images.topLeft ? lightLhElbow : darkLhElbow } alt="" className="top-left" data-tip data-for="class" onMouseOver={handleHover} /></td>
                <td><img id="pipe-top-middle" src={ darkVertical } alt="" className="top-middle" data-tip data-for="class" onMouseOver={handleHover} /></td>
                <td><img src={images.lightbulb ? lightbulbOn : lightbulbOff } alt="" className="lightbulb" data-tip data-for="class" onMouseOver={handleHover} /></td>
              </tr>
              <tr>
                <td></td>
                <td><img id="pipe-middle-left" src={ images.middleLeft ? flashHorizontal : darkHorizontal } alt="" className="middle-left" data-tip data-for="class" onMouseOver={handleHover} /></td>
                <td><img id="pipe-middle-middle" src={ darkLhElbow } alt="" className="middle-middle" data-tip data-for="class" onMouseOver={handleHover} /></td>
                <td><img id="pipe-middle-right" src={images.middleRight ? flashHorizontal : darkHorizontal } alt="" className="middle-right" data-tip data-for="class" onMouseOver={handleHover} /></td>
              </tr>
              <tr>
                <td></td>
                <td><img id="pipe-bottom-left" src={images.bottomLeft ? lightLhElbow : darkLhElbow } alt="" className="bottom-left" data-tip data-for="class" onMouseOver={handleHover} /></td>
                <td><img id="pipe-bottom-middle" src={images.bottomMiddle ? flashVertical : darkVertical } alt="" className="bottom-middle" data-tip data-for="class" onMouseOver={handleHover} /></td>
                <td><img id="pipe-bottom-right" src={images.bottomRight ? lightLhElbow : darkLhElbow } alt="" className="bottom-right" data-tip data-for="class" onMouseOver={handleHover} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}

const mapState = ({ challengeSpecificProps }, { handleHover } ) => ({
  challengeSpecificProps,
  handleHover,
})

const mapDispatch = dispatch => ({
  setChallengeProps: props => dispatch(setChallengeProps(props))
})

export default connect(mapState, mapDispatch)(PipeDream)