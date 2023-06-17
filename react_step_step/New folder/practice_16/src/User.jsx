import React from 'react'
import {useParams} from 'react-router-dom'
function User() {

    const paramObj= useParams()
      console.log(paramObj)
  return (
    <div>
        <h1>{paramObj.id} </h1>
        <h1>{paramObj.name} </h1>
       
    </div>
  )
}

export default  User 