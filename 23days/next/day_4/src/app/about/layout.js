"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const layout = ({children}) => {
  const path =usePathname();
  console.log(path)
  return (
    
    <div>
      {
        path !=="/about/aboutstudent" ?
        <ul>
        <li><Link href="/about">about</Link></li>
        
    <li><Link href="/about/aboutcollege">aboutcollege</Link></li>
    <li><Link href="/about/aboutstudent">aboutstudent</Link></li>  </ul> : <h1>conditionl layeoytu</h1>
      }

      
        {/* <h1>helo jii</h1> */}
       
        {children}
    </div>
  )
}

export default layout