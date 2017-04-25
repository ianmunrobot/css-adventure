import React from 'react'
import { connect } from 'react-redux'
import ReactToolTip from 'react-tooltip'

import './Challenge1.css'

class Challenge1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      styles: ''
    }
  }

  handleHover = (e) => {
    this.setState({
      styles: e.target.className
    })
  }

  render () {
    const styles = this.state.styles.split(' ').map((singleClassName, id) => (<p key={id}>{singleClassName}</p>))

    return (
      <div className="main-challenge">
        <ReactToolTip id='class' aria-haspopup="true">
          {styles}
        </ReactToolTip>
        <div className="box black-box-left" data-tip data-for="class" onMouseOver={this.handleHover}>
          txt left
        </div>
        <div className="box black-box-right" data-tip data-for="class" onMouseOver={this.handleHover}>
          txt right
        </div>
      </div>
    )
  }

}

const mapState = ({rules}) => ({
  rules
})

export default connect(mapState)(Challenge1)