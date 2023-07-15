

"use client"
import { useRouter } from 'next/navigation';


import Link from 'next/link';
function Home() {
  const router = useRouter();

  const navigate =(name)=>{
      router.push(name)
  }
  return (
<main>
  <h1> hello i am Home page</h1>
<Link href={"/about/aboutStudent"}>Go to link Page</Link> <br /> <br />
<Link href={"/help"}>Go to link Page</Link> <br /> <br />

{/* <button onClick={()=>router.push("/about")}>Go to About Page</button> */}
{/* <button onClick={()=>router.push("/help")}>Go to Help Page</button> */}

<button onClick={navigate("/about")}>Go to About Page</button>
<button onClick={navigate("/help")}>Go to About Page</button>
</main> 


  )
}

export default Home;
