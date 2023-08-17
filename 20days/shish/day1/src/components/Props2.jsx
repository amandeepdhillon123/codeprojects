import React from 'react'
import PropTypes from "prop-types"
const Props2 = ({name}) => {
  return (
    <div>{name}</div>
  )
}

export default Props2

// Props2.defaultProps ={
//     name:"raman"
// }

Props2.propTypes ={
    name:PropTypes.string.isRequired
}