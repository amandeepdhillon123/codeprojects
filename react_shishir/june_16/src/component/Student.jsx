import React from 'react'
import { useContext } from 'react'
import { data, data2 } from './Five'
const Student = () => {

    const {name,city,surName}= useContext(data)
    const email=useContext(data2)
    return (
    <div>
  <h1>{name}</h1>
  <h1>{city}</h1>
  <h1>{surName}</h1>
  <h2>{email}</h2>
    </div>
  )
}

export default Student