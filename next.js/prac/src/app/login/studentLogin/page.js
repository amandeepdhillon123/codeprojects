"use client"

import { useRouter } from "next/navigation"



const StudentLogin = () => {

    const router = useRouter();
  return (
    <div>
        <h1>StudentLogin</h1>
        <button onClick={()=>router.push("/login")}>login</button>
        <button onClick={()=>router.push("/")}>Home</button>
    </div>
  )
}

export default StudentLogin