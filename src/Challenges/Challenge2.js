import React from 'react'
import { connect } from 'react-redux'
import ReactToolTip from 'react-tooltip'

import './Challenge2.css'

import { setTests } from '../redux/reducers/testReducer'
import { setChallengeText } from '../redux/reducers/challengeTextReducer'

const challengeTwoTests = []

class Challenge2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classNames: ``,
    }
  }

  componentDidMount () {
    this.props.setTests(challengeTwoTests)
    this.props.setChallengeText('...oh no! The hacker has destroyed the formatting of my inventory!\nWe need to set it straight')
  }

  handleHover = (e) => {
    this.setState({
      classNames: e.target.className
    })
  }

  render () {
    const styles =
      this.state.classNames
        .split(' ')
        .map((singleClassName, id) => (<p key={id}>{`.${singleClassName}`}</p>))

    // image path names for 'inventory items'
    const imageNames = ['Hammer1-64', 'Screwdriver1-64', 'Laptop1-64', 'CopperWire1-64', 'HoverPad1-64', 'LightBulb1-64', 'SolderingIron1-64']

    const inventory = imageNames.map((path, id) => (
      <li className="inventory-li" key={id} data-tip data-for="class" onMouseOver={this.handleHover}>
        <img className="inventory-image" src={`/img/${path}.png`} alt="" onMouseOver={this.handleHover}/>
      </li>
    ))

    return (
      <div className="row wrapper">
        <div className="col-xs-6">
          <ReactToolTip id='class' aria-haspopup="true">
            {styles}
          </ReactToolTip>
          <img className="robot" id="robot-2" src="/img/robot 1-animation (no height change).gif" alt="" data-tip data-for="class" onMouseOver={this.handleHover}/>
        </div>
        <div className="col-xs-6">
          <ul>
            {inventory}
          </ul>
        </div>
      </div>
    )
  }

}

const mapState = ({rules}) => ({
  rules
})

const mapDispatch = (dispatch) => ({
  setTests: (test) => {
    dispatch(setTests(test))
  },
  setChallengeText: (text) => {
    dispatch(setChallengeText(text))
  }
})

export default connect(mapState, mapDispatch)(Challenge2)