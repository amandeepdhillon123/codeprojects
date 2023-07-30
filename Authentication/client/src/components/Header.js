import React from 'react'
import Avatar from '@mui/material/Avatar';
import './header.css'
const Header = () => {
  return (
   <>
   <header>
    <nav>
        <h1>Authentication</h1>
        <div className="avtar">
        <Avatar style={{background: "blue"}}>A</Avatar>
        </div>
        </nav>

   </header>
   </>
  )
}

export default Header