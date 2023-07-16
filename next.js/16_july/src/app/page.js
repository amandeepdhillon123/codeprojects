"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"
export default function Home() {

  const router = useRouter();

  const navigate = (nam)=>{
    router.push(nam)
  }
  return (
    <>
      <h1>Home page</h1>
      <Link href={"/login"}>Login page</Link> <br /> <br />
      <Link href={"/about"}>About page</Link> <br /> <br />

      {/* <button onClick={()=>router.push("/login")}>Login</button>
      <button onClick={()=>router.push("/about")}>about</button> */}

     
     <button onClick={()=>navigate("/login")}>login</button>
     <button onClick={()=>navigate("/about")}>about</button>
    </>
  )
}


