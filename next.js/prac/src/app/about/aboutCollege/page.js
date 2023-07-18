"use client"

import { useRouter } from "next/navigation"



const AbourCollege = () => {

    const router = useRouter();
  return (
    <div>
        <h1>AbourCollege</h1>
        <button onClick={()=>router.push("/about")}>about</button>
        <button onClick={()=>router.push("/")}>Home</button>
    </div>
  )
}

export default AbourCollege