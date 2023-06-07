import React from 'react'

function Child(props) {
   const  data="amandeep dhillon"
  return (
    <div>
   <h1>child name : </h1>
   <button onClick={()=>props.alert(data)}>update</button>
    
    </div>
  )
}

export default Child