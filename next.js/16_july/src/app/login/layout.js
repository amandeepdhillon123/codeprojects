 "use client"
import Link from "next/link"
import '../about/about.css'

import { usePathname } from "next/navigation"
const Layout = ({children}) => {

    const pathName = usePathname()
    console.log(pathName)
  return (
       <div>

        {
            pathName !=="/login/teacherLogin" ?
            <ul className="about-menu">
            <li>
                <Link href={"/login"}>Loginmain</Link>
            </li>
            <li>
                <Link href={"/login/studentLogin"}>StudentLogin</Link>
            </li>
            <li>
                <Link href={"/login/teacherLogin"}>TeacherLogin</Link>
            </li>
           </ul>
           :
           <h1>conditonal layout</h1>
        }
      
      

       {
        children
       }
       
       </div>
  )
}

export default Layout