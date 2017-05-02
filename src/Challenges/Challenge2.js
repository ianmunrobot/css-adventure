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

    const imageNames = ['Hammer1-64', 'Screwdriver1-64', 'Laptop1-64', 'CopperWire1-64', 'HoverPad1-64']

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
          <img className="robot" src="/img/robot 1-animation.gif" alt="" data-tip data-for="class" onMouseOver={this.handleHover}/>
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
  }
})

export default connect(mapState, mapDispatch)(Challenge2)