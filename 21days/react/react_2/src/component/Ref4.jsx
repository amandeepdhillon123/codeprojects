import React from 'react'
import { forwardRef } from 'react'
function Ref4(props,ref) {
  return (
    <div>
        <input type="text"  ref={ref}/>
    </div>
  )
}

export default forwardRef(Ref4)