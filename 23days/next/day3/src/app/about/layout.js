import React from 'react'
import Link from 'next/link'
const layout = ({children}) => {
  return (
   
    <div>
        {/* <h1>helo jii</h1> */}
        <ul>
            <li><Link href="/about">about</Link></li>
            
        </ul> <li><Link href="/about/aboutcollege">aboutcollege</Link></li>
        <li><Link href="/about/aboutstudent">aboutstudent</Link></li>
        {children}
    </div>
  )
}

export default layout