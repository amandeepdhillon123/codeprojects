import React from 'react'

function Fun2({ram}) {
  return (
    <div>
        <button onClick={()=>ram()}>fun1</button>
        <button onClick={ram()}>fun2</button>
    </div>
  )
}

export default Fun2