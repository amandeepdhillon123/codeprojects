
"use client"
import React from 'react'
 import {usePathname} from 'next/navigation'
const layout = ({children}) => {
    const pathname = usePathname()
    console.log(pathname)
  return (
    <div>
        {
            pathname === "/about/ram" ? "" :  <h1>hello</h1>
        }
        
        {
            children
        }
    </div>
  )
}

export default layout