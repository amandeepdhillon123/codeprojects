import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const[data,setData] =useState([])
  useEffect(()=>{
       
    fetch("https://jsonplaceholder.typicode.com/users").then((result)=>{
    result.json().then((resp)=>{
      console.log("result",resp)

      setData(resp)
    })
  })
  },[])

  console.log(data)
    

    
  

 
  
  return (
    <> 
    <table border="1">
    <tr>
      <td>ID</td>
      <td>NAME</td>
      <td>UsernaME</td>
      <td>EMAIL</td>
      <td>address</td>
    </tr>
     {
      data.map((item)=>
          
       <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.username}</td>
        <td>{item.email}</td>
        <td>
          
            <tr>  
              <td>{item.address.street}</td>
              </tr>
            <tr>
            <td>{item.address.suite}</td>
           
          </tr>
          <tr>
          <td>{item.address.city}</td>
          </tr>
          
          </td>  
       </tr>


      )
     }
   

  
    
    </table>
 
    </>
  )
}

export default App
