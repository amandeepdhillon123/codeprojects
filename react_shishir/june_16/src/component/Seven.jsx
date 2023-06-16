import React from 'react'
import { useParams } from 'react-router-dom';

function Seven() {
  const paramObj= useParams();

  console.log(paramObj)
  return (
    <div>
        {paramObj.Id}
        {paramObj.Fname}
        {paramObj.Lname}
    </div>
  )
}

export default Seven