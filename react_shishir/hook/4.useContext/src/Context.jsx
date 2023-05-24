import React from 'react'
 import { useContext } from 'react'

 import { data } from './App'
 import { data2 } from './App'
const Con = () => {
//   const name= useContext(data)

const{name,city}=useContext(data)

const email=useContext(data2)

  return (
    <div>

{name}

{city}

{email}

    </div>
  )
}

export default Con