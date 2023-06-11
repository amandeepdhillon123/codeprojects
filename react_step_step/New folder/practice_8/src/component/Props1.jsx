import React from 'react'

const Props1 = ({name,number,value,data,fun,fuc}) => {
 
 
    return (
    <>
    <h1>Props</h1>
     <h2>{name}</h2>
     <h2>{number}</h2>
     <h2>{value}</h2>
     <h2>{data.vpo}</h2>
   

     <button onClick={fun}>show</button>
      <button onClick={fuc}>fuc</button>
    </>
  )
}

export default Props1