import React from 'react'
import { connect } from 'react-redux'

import { setChallengeProps } from '../../redux/reducers/challengeSpecificProps'

import './Challenge4.css'

class Challenge4 extends React.Component {

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
        <div className="col-xs-4">
        <img className="robot" id="robot-2" src="/img/robot 1-animation (no height change).gif" alt="" data-tip data-for="class" onMouseOver={handleHover}/>
        </div>
        <div className="col-xs-8">
          <table>
            <tbody>
              <tr>
                <td id="battery"><img src="/img/PowerBattery-128.png" alt="" className="battery" data-tip data-for="class" onMouseOver={handleHover} /></td>
                <td><img id="pipe-top-left" src={images.topLeft ?  `/img/PowerConduit1(light-lhElbow)-128.gif`: `/img/PowerConduit1(dark-lhElbow)-128.png`} alt="" className="top-left" data-tip data-for="class" onMouseOver={handleHover} /></td>
                <td><img id="pipe-top-middle" src="/img/PowerConduit1(dark-vertical)-128.png" alt="" className="top-middle" data-tip data-for="class" onMouseOver={handleHover} /></td>
                <td><img src={`/img/LightBulb1(${images.lightbulb ? 'on' : 'off'})-128.png`} alt="" className="lightbulb" data-tip data-for="class" onMouseOver={handleHover} /></td>
              </tr>
              <tr>
                <td></td>
                <td><img id="pipe-middle-left" src={images.middleLeft ?  `/img/PowerConduit1(flash-horizontal)-128.gif`: `/img/PowerConduit1(dark-horizontal)-128.png`} alt="" className="middle-left" data-tip data-for="class" onMouseOver={handleHover} /></td>
                <td><img id="pipe-middle-middle" src="/img/PowerConduit1(dark-lhElbow)-128.png" alt="" className="middle-middle" data-tip data-for="class" onMouseOver={handleHover} /></td>
                <td><img id="pipe-middle-right" src={images.middleRight ?  `/img/PowerConduit1(flash-horizontal)-128.gif`: `/img/PowerConduit1(dark-horizontal)-128.png`} alt="" className="middle-right" data-tip data-for="class" onMouseOver={handleHover} /></td>
              </tr>
              <tr>
                <td></td>
                <td><img id="pipe-bottom-left" src={images.bottomLeft ?  `/img/PowerConduit1(light-lhElbow)-128.gif`: `/img/PowerConduit1(dark-lhElbow)-128.png`} alt="" className="bottom-left" data-tip data-for="class" onMouseOver={handleHover} /></td>
                <td><img id="pipe-bottom-middle" src={images.bottomMiddle ?  `/img/PowerConduit1(flash-vertical)-128.gif`: `/img/PowerConduit1(dark-vertical)-128.png`} alt="" className="bottom-middle" data-tip data-for="class" onMouseOver={handleHover} /></td>
                <td><img id="pipe-bottom-right" src={images.bottomRight ?  `/img/PowerConduit1(light-lhElbow)-128.gif`: `/img/PowerConduit1(dark-lhElbow)-128.png`} alt="" className="bottom-right" data-tip data-for="class" onMouseOver={handleHover} /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }

}

const mapState = ({ challengeSpecificProps }) => ({
  challengeSpecificProps
})

const mapDispatch = dispatch => ({
  setChallengeProps: props => dispatch(setChallengeProps(props))
})

export default connect(mapState, mapDispatch)(Challenge4)