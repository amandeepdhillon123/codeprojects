import React from 'react'
import Fun2 from './Fun2'
function Fun1() {

    function ram(){
   alert("helloo i am amandeep")
    }
  return (
    <div>
    <Fun2 ram={ram} />
    </div>
  )
}

export default Fun1