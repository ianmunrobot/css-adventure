import React from 'react';
import { connect } from 'react-redux'

import './Challenge1.css'

const Challenge1 = props => {
  let style = props.rules.length ? props.rules[0].declarations : {}
  return (
    <div className="main-challenge">
      <div className="box black-box-left" style={style}>
        txt left
      </div>
      <div className="box black-box-right">
        txt right
      </div>
    </div>
  )
}

const mapState = ({rules}) => ({
  rules
})

export default connect(mapState)(Challenge1)