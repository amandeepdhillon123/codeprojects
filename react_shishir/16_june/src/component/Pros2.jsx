import React from 'react'
import propTypes from 'prop-types'
function Pros2({name}) {
  return (
    <div>
    
    <h1>{name}</h1>

    </div>
  )
}

// Pros2.defaultProps={ name:"jaat"}

Pros2.propTypes={
    name:propTypes.string.isRequired,
}

export default Pros2