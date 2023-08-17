import React from 'react'
import Link from 'next/link'
const List = () => {

    const name =["amandeep","raohan","parmod"]
  return (
    <div>
         <h1>hello</h1>
         <ul>
            {
                name.map((ele)=>
            
                <li>{<Link href={`/studentlist/${ele}`}>{ele}</Link>}</li>
            
                )
            }
         </ul>
    </div>
  )
}

export default List