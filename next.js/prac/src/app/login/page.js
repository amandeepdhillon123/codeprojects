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
    </div>
  )
}

export default Login