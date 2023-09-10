"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"
const page = () => {
    const router = useRouter()
  return (
    <div>
        <h1>page</h1>
        <Link href="/">Home  page</Link> <br /> <br />
        <button onClick={()=> router.push('/')}>GO to home page</button>
    </div>
  )
}

export default page