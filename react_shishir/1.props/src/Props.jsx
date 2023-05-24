import React from 'react'

import Proptypes from "prop-types"

const Props = ({name,obj,number,fun,tru,symbol}) => {
  return (
    <>
    {name} <br />
    {obj.name} <br />

{number}<br />
{tru}
{fun}

{symbol}


    </>
  )
}

export default Props

// Props.defaultProps={
//     name:"jaat"
// }

Props.propTypes={
    name:Proptypes.string.isRequired

}