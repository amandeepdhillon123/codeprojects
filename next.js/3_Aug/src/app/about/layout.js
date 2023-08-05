import React from 'react'
import Link from 'next/link'
import "./about.css"
const Layout = ({children}) => {
  return (
    <div>
        <ul className='main'>
           <li>
               <Link href="/about">about</Link>        
            </li>
            <li>
               <Link href="/about/aboutCollege">Student</Link>        
            </li>
            <li>
               <Link href="/about/aboutStudent">Teacher</Link>        
            </li>
        </ul>
       {children}
    </div>
  )
}

export default Layout