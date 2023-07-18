
import React from 'react'
import Link from 'next/link'
const Log = ({children}) => {
  return (
    <div>
        <ul>
            <li>
                <Link href="/about">about</Link>
            </li>
            <li>
                <Link href="/about/aboutCollege">abotCollege</Link>
            </li>
            <li>
                <Link href="/about/aboutStudent">aboutStudent</Link>
            </li>
        </ul>
           {children}
    </div>
  )
}

export default Log