import React from 'react'
 import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <div>

     <Link to="/home">Home</Link> <br /> <br />
        <Link to="/about">About</Link>
        <Link to="/log">Log</Link>
    </div>
  )
}

export default Nav