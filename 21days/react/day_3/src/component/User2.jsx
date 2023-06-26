import React from 'react'

function User2(props) {
    const name="amandeep"
  return (


    <div>
   

  <button onClick={()=>props.data(name)}>alert</button>

    </div>
  )
}

export default User2