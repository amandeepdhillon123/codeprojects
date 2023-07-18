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
        <button onClick={()=>router.push("/about/aboutCollege")}>Aboutcolege</button>
        <button onClick={()=>router.push("/about/aboutStudent")}>About student </button>
      </div>
    )
  }
  
  export default About;