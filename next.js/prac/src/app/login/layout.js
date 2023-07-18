import React from 'react'
import Link from 'next/link'
const Log = ({children}) => {
  return (
    <div>
        <ul>
            <li>
                <Link href="/login">login</Link>
            </li>
            <li>
                <Link href="/login/studentLogin">student login</Link>
            </li>
            <li>
                <Link href="/login/teacherLogin">teacherlogin</Link>
            </li>
        </ul>
           {children}
    </div>
  )
}

export default Log