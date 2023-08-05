import React from 'react'
import Link from 'next/link'
import "./login.css"
const Layout = ({children}) => {
  return (
    <div>
        <ul className='main'>
           <li>
               <Link href="/login">login</Link>        
            </li>
            <li>
               <Link href="/login">Student</Link>        
            </li>
            <li>
               <Link href="/login">Teacher</Link>        
            </li>
        </ul>
       {children}
    </div>
  )
}

export default Layout