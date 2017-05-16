import React from 'react'
import ReactToolTip from 'react-tooltip'

const Tooltip = ({ classNamesToDisplay }) => (
  <ReactToolTip id='class' aria-haspopup="true">
    { classNamesToDisplay }
  </ReactToolTip>
)

export default Tooltip