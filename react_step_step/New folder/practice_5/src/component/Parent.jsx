import React from 'react'
import Child from './Child'
function Parent() {

  function parentAlert(data){
  alert(data)
  }
  return (
    <div>

   <h1>Parent component</h1>
  

   <Child alert={parentAlert}/>

    </div>
  )
}

export default Parent