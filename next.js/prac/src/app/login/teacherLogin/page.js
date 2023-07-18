"use client"

import { useRouter } from "next/navigation"



const TeacherLogin = () => {
    const router = useRouter();
  return (
    <div>
        <h1>TeacherLogin</h1>
        <button onClick={()=>router.push("/login")}>login</button>
        <button onClick={()=>router.push("/")}>Home</button>
    </div>
  )
}

export default TeacherLogin
