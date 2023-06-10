import React from 'react'

function Data(props) {
    // console.log(props.data.name)
     const {data} =props
    
  return (
    <div>

    <h1>{data.name}</h1>
    <h1>{data.age}</h1>
    </div>
  )
}

export default Data