import React from 'react'
import { connect } from 'react-redux'
import ReactToolTip from 'react-tooltip'
import store from '../redux'

import './Challenge3.css'

import { setTests } from '../redux/reducers/testReducer'
import { setChallengeText, addChallengeText } from '../redux/reducers/challengeTextReducer'
import { isOpaque, isVisibleIgnoreNesting } from '../testFunctions'

const challengeThreeTest = () => {
  let hackChecks = [
    document.getElementById('hack1'),
    document.getElementById('hack2'),
    document.getElementById('hack3'),
    document.getElementById('hack4'),
  ]

  let passing = hackChecks.filter(element => {
    return !isVisibleIgnoreNesting(element) || !isOpaque(element)
  })

  if (passing.length === 4) {
    store.dispatch(addChallengeText(`Whew!`))
  } else if (passing.length > 2) {
    store.dispatch(addChallengeText(`We're getting there! keep going...`))
  }
  // don't hide the robot!
  if (!isVisibleIgnoreNesting(document.getElementById('robot'))) {
    store.dispatch(addChallengeText(`No!!!! what have you done?! Bring me back!`))
  }

}


const challengeThreeTests = [challengeThreeTest]

class Challenge3 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classNames: ``,
    }
  }

  componentDidMount () {
    this.props.setTests(challengeThreeTests)
    this.props.setChallengeText(`bzz....\nOh no! It appears that a hacker has defaced our beautiful mainframe!\nHelp me get rid of this awful graffiti. I don't care you how do it, just make them invisible!`)
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

    return (
      <div className="row wrapper-3">
        <div className="col-xs-12">
          <ReactToolTip id='class' aria-haspopup="true">
            {styles}
          </ReactToolTip>
          <img className="robot" id="robot-3" src="/img/robot 1-animation (no height change).gif" alt="" data-tip data-for="class" onMouseOver={this.handleHover}/>
          <span className="hackThePlanet" data-tip data-for="class" id="hack1" onMouseOver={this.handleHover}>HACK THE PLANET</span>
          <span className="hackThePlanet2" data-tip data-for="class" id="hack2" onMouseOver={this.handleHover}>HACKERZ 4 EVA</span>
          <p className="hackThePlanet3" data-tip data-for="class" id="hack3" onMouseOver={this.handleHover}>RIGHTEOUS HACKS</p>
          <img className="hack-img" src="/img/Hack1.png"  data-tip data-for="class" id="hack4" alt="" onMouseOver={this.handleHover}/>
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
  setChallengeText: text => {
    dispatch(setChallengeText(text))
  },
  addChallengeText: text => {
    dispatch(setChallengeText(text))
  },
})

export default connect(mapState, mapDispatch)(Challenge3)