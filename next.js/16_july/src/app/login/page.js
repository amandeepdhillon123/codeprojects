 "use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
const Login = ()=>{
    const router = useRouter();
    return(
        <>
         <h1>login page</h1>
        <Link href={"/"}>Home page</Link> <br /> <br />
        <button onClick={()=>router.push("/")}>Home</button>
        </>
       
    )
}

export default Login;