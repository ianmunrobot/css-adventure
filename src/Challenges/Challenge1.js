import React from 'react'
import { connect } from 'react-redux'
import ReactToolTip from 'react-tooltip'

import './Challenge1.css'

import { setTests } from '../redux/reducers/testReducer'
import { isVisible, overlap, isOpaque } from '../testFunctions'

const challengeOneTest = () => {
  let element = document.getElementById('stuckFriend')
  let isOverlapping = overlap(element, document.getElementById('box-left')) || overlap(element, document.getElementById('box-right'))
  // console.log('overlap?', isOverlapping);
  let opacity = isOpaque(document.getElementById('box-left')) && isOpaque(document.getElementById('box-right'))
  let visible = isVisible(element)
  if (!isOverlapping && visible) {
    console.log('You saved me!')
  } else if (!opacity) {
    console.log('even transparent blocks can keep me stuck, please move items to free me!')
  } else {
    console.log('overlap?', isOverlapping, '\nvisible?', visible, '\nopaque?', opacity)
    console.log('not found')
  }
}

const challengeOneTests = [challengeOneTest]

class Challenge1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classNames: ``,
      foundMessage: `I'm still stuck!`,
    }
  }

  componentDidMount () {
    this.props.setTests(challengeOneTests)
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
      <div className="wrapper">
        <div className="main-challenge">
          <ReactToolTip id='class' aria-haspopup="true">
            {styles}
          </ReactToolTip>
          <div className="stuckFriend" id="stuckFriend" onMouseOver={this.handleHover}>
            {this.state.foundMessage}
          </div>
          <div className="box black-box-left" id="box-left" data-tip data-for="class" onMouseOver={this.handleHover}>
            txt left
          </div>
          <div className="box black-box-right" id="box-right" data-tip data-for="class" onMouseOver={this.handleHover}>
            txt right
          </div>
          <div className="quote">
            Help! I'm stuck behind these black boxes! Can you save me?
          </div>
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
  }
})

export default connect(mapState, mapDispatch)(Challenge1)