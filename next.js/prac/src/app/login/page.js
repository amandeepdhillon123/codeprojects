"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"
const Login = () => {

    const router = useRouter();
  return (
    <div>
        <h1>I am log in page</h1>

        
        <Link href={'/'}>Home</Link>
        

        <button onClick={()=>router.push("/")}>Home</button>
        
        <button onClick={()=>router.push("/login/studentLogin")}>student login</button>
        <button onClick={()=>router.push("/login/teacherLogin")}>teacher login </button>
    </div>
  )
}

export default Login