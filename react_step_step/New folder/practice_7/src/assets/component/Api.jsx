import React, { useState } from 'react'
import { useEffect } from 'react'
function Api() {
    const [data,setData] =useState([])
    useEffect(()=>{
   
        fetch("https://fakestoreapi.com/users").then((result) =>{
   result.json().then((res) =>{
    // console.log(res)

    setData(res)
   })
    })
    },[])

    console.log(data)
    
       
    
  return (
    <div>
    <h1>Get Api Call</h1>
    <table border='1' >
        <tr>
        <td>ID</td>
        <td>Name</td>
        <td>Password</td>
         <td>Mobile</td>
        </tr>
        {
            data.map((item) =>
         
         <tr>
            <td>{item.id}</td>
        <td>{item.name.firstname} {item.name.lastname}</td>
        
        <td>{item.username}</td>
        <td>{item.password}</td>
        
        </tr>
            )
        }
    </table>

    </div>
  )
}

export default Api