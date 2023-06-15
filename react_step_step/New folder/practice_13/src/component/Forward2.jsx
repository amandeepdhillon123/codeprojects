import React from 'react'
import { forwardRef} from 'react'
function Forward2(props,ref) {
  return (
    <div>
        <input type="text" ref={ref} />
    </div>
  )
}

export default forwardRef(Forward2)