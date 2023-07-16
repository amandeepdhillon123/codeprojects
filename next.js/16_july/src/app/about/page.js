"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";
const About = ()=>{
    const router = useRouter();
    return(
       <>
          <h1>About page</h1>
          <Link href={"/"}>Home page</Link> <br /> <br />
          <button onClick={()=>router.push("/")}>Home page</button>
       </>
     
    )
}

export default About;