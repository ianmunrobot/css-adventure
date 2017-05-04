import React from 'react'
import { connect } from 'react-redux'
import ReactToolTip from 'react-tooltip'

class SingleChallenge extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      classNames: ``,
    }
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

    const Challenge = this.props.currentChallenge

    return (
      <div>
        <ReactToolTip id='class' aria-haspopup="true">
          {styles}
        </ReactToolTip>
        <Challenge handleHover={this.handleHover} classNames={this.state.classNames}/>
      </div>
    )
  }

}

const mapState = ({challenge}) => ({
  currentChallenge: challenge
})

export default connect(mapState)(SingleChallenge)