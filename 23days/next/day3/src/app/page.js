"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router =useRouter()

  const navigate =(name)=>{
       router.push(name)
  }
  return (
    <>
    <h1>basic routing</h1>
    <Link href ="/login"> Go to Login Page</Link> <br /> <br />
    <Link href="/about">Go to About Page</Link> <br /> <br />
    {/* <button onClick={()=>router.push("/login")}>Go to login page</button> <br /> <br /> */}
    
    {/* <button onClick={()=>router.push("/about")}>Go to about page</button> */}
    
  <button onClick={()=>navigate('/login')}> Go to Login page</button>
   {/* <button onClick={()=>navigate("/about")}>go about</button>  */}
   <button onClick={()=>navigate('/about')}> Go to about page</button>
    </>
  
  
  
  )
}
