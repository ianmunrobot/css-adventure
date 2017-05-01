import React from 'react'
import { connect } from 'react-redux'
import ReactToolTip from 'react-tooltip'

import './Challenge2.css'

import { setTests } from '../redux/reducers/testReducer'

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
        <ReactToolTip id='class' aria-haspopup="true">
          {styles}
        </ReactToolTip>
        <div className="col-6">
          <img className="robot" src="/img/robot-1.png"  data-tip data-for="class"alt="" onMouseOver={this.handleHover}/>
        </div>
        <div className="col-6" data-tip data-for="class" onMouseOver={this.handleHover}>
          <ul>
            <li>
              <img src="/img/Hammer1.png" alt="" />
            </li>
            <li>
              <img src="/img/Screwdriver1.png" alt="" />
            </li>
          </ul>
        </div>
        <div>
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

export default connect(mapState, mapDispatch)(Challenge2)