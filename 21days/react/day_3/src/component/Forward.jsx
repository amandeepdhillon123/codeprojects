import React from 'react'
import {forwardRef} from 'react'
function Forward(props,ref) {
  return (
    <div>
        <input type="text" ref={ref} />
    </div>
  )
}

export default forwardRef(Forward)