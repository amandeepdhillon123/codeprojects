import React from 'react'
import { useLocation } from 'react-router-dom';
 
function Seven() {
//   const paramObj= useParams();

const locationObj= useLocation();
console.log(locationObj.pathname)

//   console.log(paramObj)
  return (
    <div>
        {/* {paramObj.Id}
        {paramObj.Fname}
        {paramObj.Lname} */}hello
    </div>
  )
}

export default Seven