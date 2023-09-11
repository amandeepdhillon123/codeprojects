"use client"
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const page = () => {
    const router= useRouter()
  return (
    <div>
        <h1>log in page</h1>
        <Link href="/">Home page</Link> <br /> <br />
        <button onClick={()=>router.push('/')}>Go to Home page</button>
    </div>
  )
}

export default page