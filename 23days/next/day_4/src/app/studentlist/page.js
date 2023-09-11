import React from 'react'
import Link from 'next/link'
function page() {
    const arr =["anil","ram","shyam","rahul","rakesh"]
  return (
    <div>
        <h1>studentlist</h1>
         <ul>
            {
                arr.map((ele)=>{
                    return <li><Link href={"studentlist/" + ele}>{ele}</Link></li>
                })
            }
         </ul>
        {/* <ul>
            <li>
                <Link href="/studentlist/anil">Anil</Link>
            </li>
            <li><Link href="/studentlist/2">Aman</Link></li>
            <li><Link href="/studentlist/3">Anil</Link></li>

            <li><Link href="/studentlist/4">rahul</Link></li> 
            <li><Link href="/studentlist/5">ramfal</Link></li>
        </ul> */}
    </div>
  )
}

export default page