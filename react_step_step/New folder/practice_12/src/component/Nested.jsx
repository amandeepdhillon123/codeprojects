import React from 'react'
  
function Nested() {

    const users=[
        {name:"aman", email:"aman@gmail.com", address:[
            {hn:"10" , city:"noida", country :'india'},
            {hn:"30" , city:"gurugram", country :'india'},
            {hn:"34" , city:"delhi", country :'india'},
            {hn:"43" , city:"amritsar", country :'india'},
        ]},
        {name:"aman", email:"aman@gmail.com", address:[
            {hn:"10" , city:"noida", country :'india'},
            {hn:"30" , city:"gurugram", country :'india'},
            {hn:"34" , city:"delhi", country :'india'},
            {hn:"43" , city:"amritsar", country :'india'},
        ]},
        {name:"aman", email:"aman@gmail.com", address:[
            {hn:"10" , city:"noida", country :'india'},
            {hn:"30" , city:"gurugram", country :'india'},
            {hn:"34" , city:"delhi", country :'india'},
            {hn:"43" , city:"amritsar", country :'india'},
        ]}
       
    ]
  return (
    <div>
        <h1>nested list with nested array</h1>
        <table border={{bordercollapse:'collapse' , color:"red"}}>
            <tbody>
                <tr>
                <td>Name</td>
                <td>Email</td>
                <td> Address</td>
                </tr>
            </tbody>
            {
                users.map((item)=>

                    <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td> 
                        {
                            item.address.map((data)=>
                                 
                                <tr>
                                <td>{data.hn}</td>
                                <td>{data.city}</td>
                                <td>{data.country}</td>
                                </tr> 
                            )
                        }
                        
                    </td>
                    </tr>
                   
                )
            }

        </table>
    </div>
  )
}

export default Nested