"use client"
import { useRouter } from "next/navigation";
import Link from "next/link";
const About = ()=>{
    const router = useRouter();
    return(
       <>
          <h1>About page</h1>
          <Link href={"/"}>Home page</Link> <br /> <br />
          <button onClick={()=>router.push("/")}>Home page</button> <br /> <br />
          <button onClick={()=>router.push("/about/aboutCollege")}>Go to aboutCollege</button>
          <button onClick={()=>router.push("/about/aboutStudent ")}>Go to aboutStudent</button>
       </>
     
    )
}

export default About;