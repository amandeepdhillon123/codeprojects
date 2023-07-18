"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
const Log = ({children}) => {

    const pathname = usePathname();
  return (
    <div>
        { 
        pathname !== "/login/teacherLogin" ?

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
    </ul> :
      <h1> conditional layout </h1>

        }
      
           {children}
    </div>
  )
}

export default Log