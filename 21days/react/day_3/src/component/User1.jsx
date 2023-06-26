import React from 'react'
import User2 from './User2'
function User1() {

    function name(name){
        alert(name)
    }
  return (
    <div>
    <User2  data={name} />
    </div>
  )
}

export default User1