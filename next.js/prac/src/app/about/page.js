"use client"

import { useRouter } from "next/navigation";
import Link from "next/link";


const About = () => {
    const router = useRouter();
    return (
      <div>
          <h1>I am about page</h1>

          <Link href={'/'}>Home</Link>
        

        <button onClick={()=>router.push("/")}>Home</button>
      </div>
    )
  }
  
  export default About;