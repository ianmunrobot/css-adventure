import React from 'react'
import { connect } from 'react-redux'

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

  componentWillReceiveProps () {
    this.setState({
      classNames: ``
    })
  }

  render () {
    const styles =
    this.state.classNames
      .split(' ')
      .map((singleClassName, id) => (<p key={id}>{`.${singleClassName}`}</p>))
    const Challenge = this.props.currentChallenge

    return (
      <Challenge handleHover={this.handleHover} classNames={styles}/>
    )
  }

}

const mapState = ({challenge}) => ({
  currentChallenge: challenge
})

export default connect(mapState)(SingleChallenge)