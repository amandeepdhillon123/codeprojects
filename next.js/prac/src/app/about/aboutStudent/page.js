"use client"

import { useRouter } from "next/navigation";


const AboutStudent = () => {

    const router = useRouter();
  return (
    <div>
        <h1>AboutStudent</h1>
        <button onClick={()=>router.push("/about")}>about</button>
        <button onClick={()=>router.push("/")}>Home</button>
    </div>
  )
}

export default AboutStudent;