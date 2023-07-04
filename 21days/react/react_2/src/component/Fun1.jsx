import React from 'react'
import Fun2 from './Fun2'
function Fun1() {
   function Alert(ram) {
        alert(ram)
    }
  return (
    <div>
       <Fun2 data ={Alert}/> 
    </div>
  )
}

export default Fun1