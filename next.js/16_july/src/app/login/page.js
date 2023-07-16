 "use client"
import Link from "next/link";
import { useRouter } from "next/navigation";
const Login = ()=>{
    const router = useRouter();
    return(
        <>
         <h1>login page</h1>
        <Link href={"/"}>Home page</Link> <br /> <br />
        <button onClick={()=>router.push("/")}>Home</button> <br /> <br />
        <button onClick={()=>router.push("/login/studentLogin")}>Go to StudentLogin</button> <br /> <br />
        <button onClick={()=>router.push("/login/teacherLogin")}>Go to TeacherLogin </button>
        </>
       
    )
}

export default Login;