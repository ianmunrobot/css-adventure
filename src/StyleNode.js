import React from 'react'
import { connect } from 'react-redux'

// return a DOM style element with injected style text from user input
const StyleNode = ({styles}) => {
  return (
    <style>
      {styles}
    </style>
  )
}

const mapState = ({styles}) => ({
  styles
})

export default connect(mapState)(StyleNode)