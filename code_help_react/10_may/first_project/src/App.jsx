import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
 import NewProduct from './component/NewProduct'
import Products from './component/Products'
 const App =()=>{
  const products =[
    {
      id:'p1',
      title:'Nirma',
      amount:100,
      date: new Date(2021,8,10)
    },
    {
      id:'p2',
      title:'Surf excel',
      amount:200,
      date: new Date(2021,6,16)
    },
    {
      id:'p3',
      title:'Tide',
      amount:200,
      date: new Date(2021,6,16)
    },
    {
      id:'p4',
      title:'Maggi',
      amount:200,
      date: new Date(2021,6,16)
    }
  ]

  function printProductData(data)
  {
    console.log('i am inside app.js')
    console.log(data)
  }

  return (
    <div>
    
    <NewProduct pranay = {printProductData}/>
  <Products items ={products}/>
    </div>
  )
 }

export default App
