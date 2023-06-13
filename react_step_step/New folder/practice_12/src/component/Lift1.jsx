import React from 'react'

function Lift1(props) {
  return (
  <>
 <button onClick={()=>props.data({name: "amandeep" , email:"amandnasdbmas"})}>update</button>
  </>
  )
}

export default Lift1