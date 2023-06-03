import React from 'react'

const Props1 = ({name,number,email,other,children}) => {
  return (
    <div>
    
    <h1>{name}</h1>
    <h2>{number}</h2>
    <h3>{email}</h3>
    <p>{other.vpo} {other.city}</p>
    <h1>{children}</h1>


    </div>
  )
}

export default Props1