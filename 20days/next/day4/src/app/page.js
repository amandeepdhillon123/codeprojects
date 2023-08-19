
 "use client"
import { useState,useEffect } from "react"
export default function Home() {
    
  const[product,setProduct]=useState([])
 let data;
  useEffect(async()=>{
     data = await fetch("https://jsonplaceholder.typicode.com/users")

    data = await data.json();
    console.log(data)
    setProduct(data)
  },[])
  return (
    <div>
      <h1>
      { product &&
        product.map((ele)=>{
        return <h1>{ele.name}</h1> 
        })
      }
      </h1>
    </div>
  )
}
