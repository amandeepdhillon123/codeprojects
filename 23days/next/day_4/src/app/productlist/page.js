"use client"   
import React from 'react'
import Link from 'next/link'
import { useEffect,useState } from 'react'
const page = () => {
      const[product,setData]= useState([])
    useEffect(async()=>{
        let data =await fetch("https://dummyjson.com/products")
           data = await data.json();
          setData(data.products)
    },[])
  return (
    <>
    
    <h1>amandeep</h1>
    {
        product.map((ele)=>(
            <h1>{ele.title}</h1>
        ))
    }
     
    </> 
  )
}

export default page