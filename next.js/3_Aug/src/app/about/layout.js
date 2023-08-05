"use client"
import React from 'react'
import Link from 'next/link'
import "./about.css"
import { usePathname } from 'next/navigation'
const Layout = ({children}) => {

    const pathname = usePathname();
  return (
    <div>
        {
            pathname !=="/about/aboutCollege" ?
            <ul className='main'>
            <li>
                <Link href="/about">about</Link>        
             </li>
             <li>
                <Link href="/about/aboutCollege">College</Link>        
             </li>
             <li>
                <Link href="/about/aboutStudent">Student</Link>        
             </li>
         </ul> : null 
        }
       
       {children}
    </div>
  )
}

export default Layout