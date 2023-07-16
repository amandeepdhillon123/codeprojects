import Link from "next/link"
import '../about/about.css'
const Layout = ({children}) => {
  return (
       <div>
      
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

       {
        children
       }
       
       </div>
  )
}

export default Layout