"use client"
import React from 'react'
import Link from 'next/link'
import "./login.css"
import { usePathname } from 'next/navigation'
const Layout = ({children}) => {
    const pathname = usePathname()
  return (
    <div>
        {
             pathname !=="/login/loginStudent" ?
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
         : null
        }
      
       {children}
    </div>
  )
}

export default Layout