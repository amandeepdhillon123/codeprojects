import React from 'react'
import propTypes  from 'prop-types'
const Pro2 = ({name}) => {
  return (
    <>
    <h1>{name}</h1>
   
    </>
  )
}



// Pro2.defaultProps={name :"deep"}

export default Pro2;

Pro2.propTypes={
    name:propTypes.string.isRequired,

   
}