
"use client"
import { useRouter } from "next/navigation"
export default function Home() {

  const router = useRouter();

  const navigate =(nam)=>{
    router.push(nam)
  }
  return (
    <div>
     <h1>hello next.js Duniya</h1>

     <button onClick={()=>navigate("/login")}>login Page</button> <br /> <br />
     <button onClick={()=>navigate("/about")}>About Page</button>
    </div>
  )
}


