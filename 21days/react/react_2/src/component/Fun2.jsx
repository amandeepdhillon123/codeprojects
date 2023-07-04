import React from 'react'

function Fun2(props) {
    const name = "amandeep"
  return (
    <div>
        <button onClick={()=>props.data(name)}>showme</button>
    </div>
  )
}

export default Fun2