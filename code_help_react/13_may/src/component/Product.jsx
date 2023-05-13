import React from 'react'
import { useState } from 'react'

import Card from './Card'


import './Product.css'
let Product =(props)=>{

    const[name,setName] = useState(props.item.name)
    const[surName,setSurName] = useState(props.item.surName)
//   console.log(props.item[0].date)

function setNameHandler(){
    setName("Aman")
}

function setSurNameHandler(){
    setName("Doctor")
}

    // console.log()
    return(
        <Card className="product">
            <h1>{name}</h1>
            <h2>{surName}</h2>
           

           <button onClick={setNameHandler}  >Change</button>
         

        </Card>
    )

    
}

export default Product;