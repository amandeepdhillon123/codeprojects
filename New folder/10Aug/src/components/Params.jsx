import React from 'react'
import { useParams } from 'react-router-dom'
const Params = () => {

    const param = useParams();
  return (
    <div>
        <h1>hheloo jii</h1>
        <h2>{param.fname}</h2>
        <h3>{param.lname}</h3>
    </div>
  )
}

export default Params